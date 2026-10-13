// Sanity-checks every lesson and topic file: registration, numbering, quiz shape.
// Usage: node tools/validate.mjs
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const lessons = [];
const topics = new Map();

const sandbox = {
  Registry: {
    registerLesson: (l) => lessons.push(l),
    registerTopic: (lessonId, t) => {
      if (!topics.has(lessonId)) topics.set(lessonId, []);
      topics.get(lessonId).push(t);
    },
  },
};
vm.createContext(sandbox);
const run = (file) => vm.runInContext(readFileSync(join(root, file), 'utf8'), sandbox, { filename: file });

run('lessons/index.js');

let errors = 0;
const fail = (msg) => {
  errors++;
  console.error('✗', msg);
};

for (const lesson of lessons) {
  lesson.files.forEach((f) => run(lesson.path + f));
  const list = topics.get(lesson.id) || [];
  if (list.length !== lesson.files.length) fail(`${lesson.id}: ${lesson.files.length} files but ${list.length} topics registered`);

  list.forEach((t, i) => {
    const where = `${lesson.id} topic ${t.n} (${lesson.files[i]})`;
    if (t.n !== i + 1) fail(`${where}: n=${t.n}, expected ${i + 1} from file order`);
    for (const key of ['title', 'family', 'summary', 'body']) if (!t[key]) fail(`${where}: missing ${key}`);
    if (!Number.isFinite(t.readTime)) fail(`${where}: readTime must be a number`);
    if (!Array.isArray(t.quiz) || t.quiz.length < 4 || t.quiz.length > 8) fail(`${where}: quiz should have 4–8 questions`);
    (t.quiz || []).forEach((q, qi) => {
      const qw = `${where} Q${qi + 1}`;
      if (!q.q || !q.explain) fail(`${qw}: missing q or explain`);
      if (!Array.isArray(q.options) || q.options.length < 2) fail(`${qw}: needs options`);
      else {
        if (!(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length)) fail(`${qw}: answer index out of range`);
        if (new Set(q.options).size !== q.options.length) fail(`${qw}: duplicate options`);
      }
    });
    const opens = (t.body.match(/<svg\b/g) || []).length;
    const closes = (t.body.match(/<\/svg>/g) || []).length;
    if (opens !== closes) fail(`${where}: unbalanced <svg> tags`);
  });

  const diagrams = list.reduce((n, t) => n + (t.body.match(/<figure class="diagram">/g) || []).length, 0);
  const questions = list.reduce((n, t) => n + t.quiz.length, 0);
  console.log(`${lesson.id}: ${list.length} topics, ${diagrams} diagrams, ${questions} quiz questions`);
}

if (errors) {
  console.error(`\n${errors} problem(s) found`);
  process.exit(1);
}
console.log('All checks passed.');
