// Hash router and views: lesson list, lesson overview, topic reader, quiz, progress.
(function () {
  const app = document.getElementById('app');

  // ---------- helpers ----------

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function render(html, title) {
    app.innerHTML = html;
    document.title = title ? `${title} · Self-Study` : 'Self-Study';
    window.scrollTo(0, 0);
    app.focus({ preventScroll: true });
  }

  function progressBar(lesson) {
    const total = lesson.files.length;
    const done = Progress.passedCount(lesson.id);
    const pct = Math.round((done / total) * 100);
    return `
      <div class="progress" role="progressbar" aria-label="${esc(lesson.title)} progress"
           aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${done}">
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <div class="progress-label"><strong>${done}</strong> of ${total} topics passed · ${pct}%</div>
      </div>`;
  }

  function topicHref(lesson, n, suffix = '') {
    return `#/lesson/${lesson.number}/topic/${n}${suffix}`;
  }

  function lessonByNumber(num) {
    for (const l of Registry.lessons.values()) if (String(l.number) === String(num)) return l;
    return null;
  }

  function notFound(msg) {
    render(`<h1>Not found</h1><p>${esc(msg)}</p><p><a href="#/">Back to lessons</a></p>`, 'Not found');
  }

  function lockedView(lesson, n) {
    render(`
      <p class="crumbs"><a href="#/lesson/${lesson.number}">Lesson ${lesson.number}</a></p>
      <div class="card locked-card">
        <h1>Topic ${n} is locked</h1>
        <p>Pass the Topic ${n - 1} quiz with at least 80% to open it.</p>
        <p><a class="btn" href="${topicHref(lesson, n - 1)}">Go to Topic ${n - 1}</a></p>
      </div>`, 'Locked');
  }

  // ---------- views ----------

  function homeView() {
    const cards = [...Registry.lessons.values()].map((l) => {
      const next = Progress.current(l.id, l.files.length);
      const cta = next === null ? 'Review' : next === 1 && Progress.passedCount(l.id) === 0 ? 'Start' : 'Continue';
      return `
        <article class="card lesson-card">
          <p class="eyebrow">Lesson ${l.number}</p>
          <h2><a href="#/lesson/${l.number}">${esc(l.title)}</a></h2>
          <p>${esc(l.description)}</p>
          ${progressBar(l)}
          <p><a class="btn" href="#/lesson/${l.number}">${cta}</a></p>
        </article>`;
    }).join('');
    render(`
      <h1>Lessons</h1>
      <p class="lead">Read each topic, then pass its short quiz (80% or better) to unlock the next one.</p>
      ${Progress.storageWorks() ? '' : '<p class="warn">This browser is blocking local storage, so progress will not be saved between sessions.</p>'}
      <div class="stack">${cards}</div>`);
  }

  async function lessonView(num) {
    const meta = lessonByNumber(num);
    if (!meta) return notFound(`No lesson ${num}.`);
    const lesson = await Registry.loadLesson(meta.id);
    const total = lesson.files.length;
    const current = Progress.current(lesson.id, total);

    const rows = [];
    for (let n = 1; n <= total; n++) {
      const t = lesson.topics.get(n);
      const passed = Progress.isPassed(lesson.id, n);
      const unlocked = Progress.isUnlocked(lesson.id, n);
      const rec = Progress.topic(lesson.id, n);
      const status = passed ? 'passed' : unlocked ? 'open' : 'locked';
      const badge = passed
        ? `<span class="badge badge-pass" title="Best ${rec.best}/${rec.total}">Passed</span>`
        : unlocked ? '<span class="badge badge-open">Up next</span>' : '<span class="badge badge-locked">Locked</span>';
      const title = t ? esc(t.title) : `Topic ${n}`;
      const inner = `
        <span class="topic-num">${n}</span>
        <span class="topic-main"><span class="topic-title">${title}</span>
          <span class="topic-meta">${t ? esc(t.family) : ''}</span></span>
        ${badge}`;
      rows.push(unlocked
        ? `<li class="topic-row ${status}${n === current ? ' current' : ''}"><a href="${topicHref(lesson, n)}">${inner}</a></li>`
        : `<li class="topic-row ${status}"><div aria-disabled="true">${inner}</div></li>`);
    }

    render(`
      <p class="crumbs"><a href="#/">Lessons</a></p>
      <p class="eyebrow">Lesson ${lesson.number}</p>
      <h1>${esc(lesson.title)}</h1>
      <p class="lead">${esc(lesson.description)}</p>
      ${progressBar(lesson)}
      ${current ? `<p><a class="btn" href="${topicHref(lesson, current)}">${Progress.passedCount(lesson.id) ? 'Continue' : 'Start'} with Topic ${current}</a></p>`
                : '<p class="success">You have passed every topic in this lesson.</p>'}
      <ol class="topic-list">${rows.join('')}</ol>`, `Lesson ${lesson.number}`);
  }

  async function topicView(num, n) {
    const meta = lessonByNumber(num);
    if (!meta) return notFound(`No lesson ${num}.`);
    const lesson = await Registry.loadLesson(meta.id);
    const t = lesson.topics.get(n);
    if (!t) return notFound(`No topic ${n} in lesson ${num}.`);
    if (!Progress.isUnlocked(lesson.id, n)) return lockedView(lesson, n);

    const rec = Progress.topic(lesson.id, n);
    const total = lesson.files.length;
    const nextOpen = n < total && Progress.isUnlocked(lesson.id, n + 1);

    render(`
      <p class="crumbs"><a href="#/lesson/${lesson.number}">Lesson ${lesson.number}</a> / Topic ${n} of ${total}</p>
      ${progressBar(lesson)}
      <article class="topic">
        <p class="eyebrow">${esc(t.family)} · ~${t.readTime} min read</p>
        <h1>${n}. ${esc(t.title)}</h1>
        ${t.source === 'new' ? '<p class="source-note">Written for this app. The original doc covers this topic only as a one-line entry.</p>' : ''}
        <p class="lead">${t.summary}</p>
        ${t.body}
      </article>
      <section class="card quiz-cta">
        <h2>Check your understanding</h2>
        <p>${t.quiz.length} questions, about 3–5 minutes. Score ${Progress.passMark(t.quiz.length)} of ${t.quiz.length} (80%) to ${n < total ? 'unlock the next topic' : 'finish the lesson'}.</p>
        ${rec ? `<p class="muted">Best score so far: ${rec.best}/${rec.total} · ${rec.attempts} attempt${rec.attempts === 1 ? '' : 's'}${rec.passed ? ' · passed' : ''}</p>` : ''}
        <p><a class="btn" href="${topicHref(lesson, n, '/quiz')}">${rec && rec.passed ? 'Retake quiz' : 'Take the quiz'}</a></p>
      </section>
      <nav class="pager">
        ${n > 1 ? `<a href="${topicHref(lesson, n - 1)}">← Topic ${n - 1}</a>` : '<span></span>'}
        ${nextOpen ? `<a href="${topicHref(lesson, n + 1)}">Topic ${n + 1} →</a>` : '<span></span>'}
      </nav>`, t.title);
  }

  async function quizView(num, n) {
    const meta = lessonByNumber(num);
    if (!meta) return notFound(`No lesson ${num}.`);
    const lesson = await Registry.loadLesson(meta.id);
    const t = lesson.topics.get(n);
    if (!t) return notFound(`No topic ${n} in lesson ${num}.`);
    if (!Progress.isUnlocked(lesson.id, n)) return lockedView(lesson, n);

    // Shuffle option order each attempt so answers are not memorised by position.
    const questions = t.quiz.map((q, qi) => ({
      ...q,
      qi,
      order: shuffle(q.options.map((_, i) => i)),
    }));
    const need = Progress.passMark(questions.length);

    const items = questions.map((q, i) => `
      <fieldset class="question" data-q="${i}">
        <legend><span class="q-num">${i + 1}.</span> ${q.q}</legend>
        ${q.order.map((oi) => `
          <label class="option">
            <input type="radio" name="q${i}" value="${oi}" required>
            <span>${q.options[oi]}</span>
          </label>`).join('')}
        <div class="explain" hidden></div>
      </fieldset>`).join('');

    render(`
      <p class="crumbs"><a href="#/lesson/${lesson.number}">Lesson ${lesson.number}</a> / <a href="${topicHref(lesson, n)}">Topic ${n}</a> / Quiz</p>
      <h1>Quiz: ${esc(t.title)}</h1>
      <p class="muted">${questions.length} questions · need ${need} correct to pass</p>
      <form id="quiz" class="quiz" novalidate>
        ${items}
        <p class="form-error" hidden>Answer every question before submitting.</p>
        <div class="quiz-actions"><button class="btn" type="submit">Submit answers</button></div>
      </form>
      <div id="result"></div>`, `Quiz: ${t.title}`);

    const form = document.getElementById('quiz');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const answers = questions.map((_, i) => {
        const el = form.querySelector(`input[name="q${i}"]:checked`);
        return el ? Number(el.value) : null;
      });
      if (answers.some((a) => a === null)) {
        form.querySelector('.form-error').hidden = false;
        const first = answers.findIndex((a) => a === null);
        form.querySelector(`[data-q="${first}"]`).scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
      form.querySelector('.form-error').hidden = true;

      let score = 0;
      questions.forEach((q, i) => {
        const ok = answers[i] === q.answer;
        if (ok) score++;
        const fs = form.querySelector(`[data-q="${i}"]`);
        fs.classList.add(ok ? 'right' : 'wrong');
        fs.querySelectorAll('input').forEach((inp) => {
          inp.disabled = true;
          const lab = inp.closest('.option');
          if (Number(inp.value) === q.answer) lab.classList.add('is-answer');
          else if (inp.checked) lab.classList.add('is-wrong');
        });
        const ex = fs.querySelector('.explain');
        ex.innerHTML = `<strong>${ok ? 'Correct.' : 'Not quite.'}</strong> ${q.explain}`;
        ex.hidden = false;
      });
      form.querySelector('.quiz-actions').remove();

      const passed = Progress.recordAttempt(lesson.id, n, score, questions.length);
      const total = lesson.files.length;
      const pct = Math.round((score / questions.length) * 100);
      const result = document.getElementById('result');
      result.innerHTML = `
        <section class="card result ${passed ? 'result-pass' : 'result-fail'}">
          <h2>${score} / ${questions.length} (${pct}%) · ${passed ? 'Passed' : 'Not yet'}</h2>
          <p>${passed
            ? (n < total ? `Topic ${n + 1} is unlocked.` : 'That was the last topic in this lesson.')
            : `You need ${need} correct. Review the explanations above, reread the topic, and try again.`}</p>
          ${progressBar(lesson)}
          <p class="btn-row">
            ${passed && n < total ? `<a class="btn" href="${topicHref(lesson, n + 1)}">Go to Topic ${n + 1}</a>` : ''}
            ${passed && n === total ? `<a class="btn" href="#/lesson/${lesson.number}">Back to lesson</a>` : ''}
            <a class="btn ${passed ? 'btn-secondary' : ''}" href="${topicHref(lesson, n)}">Reread topic</a>
            <button class="btn btn-secondary" type="button" id="retry">Retake quiz</button>
          </p>
        </section>`;
      document.getElementById('retry').addEventListener('click', () => quizView(num, n));
      result.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  function progressView() {
    const lessons = [...Registry.lessons.values()];
    render(`
      <h1>Progress</h1>
      <div class="stack">
        ${lessons.map((l) => `
          <section class="card">
            <h2>Lesson ${l.number}: ${esc(l.title)}</h2>
            ${progressBar(l)}
            <p><button class="btn btn-danger" type="button" data-reset="${l.id}">Reset this lesson</button></p>
          </section>`).join('')}
        <section class="card">
          <h2>Back up or move progress</h2>
          <p>Progress lives in this browser's storage. Copy it out to keep a backup or to paste into another device.</p>
          <textarea id="progress-json" rows="6" spellcheck="false" aria-label="Progress data">${esc(Progress.exportJSON())}</textarea>
          <p class="btn-row">
            <button class="btn btn-secondary" type="button" id="copy">Copy</button>
            <button class="btn btn-secondary" type="button" id="import">Load pasted progress</button>
          </p>
          <p id="io-msg" class="muted" aria-live="polite"></p>
        </section>
      </div>`, 'Progress');

    app.querySelectorAll('[data-reset]').forEach((b) => b.addEventListener('click', () => {
      if (confirm('Reset all progress for this lesson? This cannot be undone.')) {
        Progress.resetLesson(b.dataset.reset);
        progressView();
      }
    }));
    const ta = document.getElementById('progress-json');
    const msg = document.getElementById('io-msg');
    document.getElementById('copy').addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(ta.value);
        msg.textContent = 'Copied.';
      } catch {
        ta.select();
        msg.textContent = 'Select-all done; press Ctrl/Cmd+C to copy.';
      }
    });
    document.getElementById('import').addEventListener('click', () => {
      try {
        Progress.importJSON(ta.value);
        progressView();
        document.getElementById('io-msg').textContent = 'Progress loaded.';
      } catch (err) {
        msg.textContent = `Could not load: ${err.message}`;
      }
    });
  }

  // ---------- router ----------

  async function route() {
    const parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    try {
      if (parts.length === 0) return homeView();
      if (parts[0] === 'progress') return progressView();
      if (parts[0] === 'lesson' && parts.length === 2) return await lessonView(parts[1]);
      if (parts[0] === 'lesson' && parts[2] === 'topic') {
        const n = Number(parts[3]);
        if (parts[4] === 'quiz') return await quizView(parts[1], n);
        return await topicView(parts[1], n);
      }
      notFound('That page does not exist.');
    } catch (err) {
      render(`<h1>Something went wrong</h1><p>${esc(err.message)}</p><p><a href="#/">Back to lessons</a></p>`);
      console.error(err);
    }
  }

  window.addEventListener('hashchange', route);
  // Keep tabs in sync: re-render when progress changes in another tab,
  // but never wipe a quiz that is being answered.
  window.addEventListener('storage', (e) => {
    if (e.key !== 'selfstudy.progress.v1') return;
    Progress.reload();
    if (!location.hash.endsWith('/quiz')) route();
  });
  route();
})();
