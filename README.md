# Self-Study

A small, dependency-free web app for working through lessons one topic at a time. Each topic has a reading with diagrams, then a short quiz. You must score at least 80% to unlock the next topic. Progress is saved in the browser.

**Lesson 1: Mechanism Primers for Mechanical Design** has 30 topics: pressure regulators, click pens, peristaltic pumps, inhalers, ratchets, check valves, dampers, gas springs, escapements, harmonic drives, flexures and more. Topics 1–5 are adapted from the original primer doc. Topics 6–30 were written for this app from that doc's topic list and are marked as such on the page.

## Run it locally

No build step. Any static file server works:

```bash
cd self-study
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly (file://) also works, because content is loaded as plain scripts rather than fetched JSON.

## How it works

| Piece | File |
| --- | --- |
| Page shell and shared SVG markers | `index.html` |
| Styles, light/dark theme, diagram classes | `css/styles.css` |
| Registry that lesson/topic files register into | `js/registry.js` |
| Progress storage (localStorage, export/import) | `js/progress.js` |
| Router and views (lessons, topic, quiz, progress) | `js/app.js` |
| Lesson catalog | `lessons/index.js` |
| One file per topic | `lessons/lesson-1/NN-slug.js` |
| Content checker | `tools/validate.mjs` |

- **Gating:** topic 1 is always open. Topic N opens once topic N−1's quiz is passed (score ≥ ceil(0.8 × questions); 4 of 5).
- **Quizzes:** answer order is shuffled on every attempt. After submitting, each question shows the right answer and an explanation. Retakes are unlimited, and the best score is kept.
- **Progress:** stored under the `selfstudy.progress.v1` key in localStorage. It survives reloads and new sessions in the same browser, and stays in sync across open tabs. The Progress page can copy it out as JSON and load it on another device, or reset a lesson.

## Adding a topic or a lesson

1. Create `lessons/lesson-N/` and add topic files that call `Registry.registerTopic`:

```js
Registry.registerTopic('lesson-2', {
  n: 1,                       // must match its position in the lesson's file list
  title: 'Topic title',
  family: 'Category',         // shown under the title
  readTime: 8,                // minutes
  source: 'new',              // optional; 'new' shows a "written for this app" note
  summary: 'One or two sentences. HTML allowed.',
  body: `
    <h2>Section</h2>
    <p>Content…</p>
    <figure class="diagram">
      <svg viewBox="0 0 540 240" role="img" aria-label="What the diagram shows">…</svg>
      <figcaption>What to notice.</figcaption>
    </figure>
  `,
  quiz: [
    {
      q: 'Question?',
      options: ['A', 'B', 'C', 'D'],
      answer: 1,              // index into options (before shuffling)
      explain: 'Why B is right.',
    },
    // 4–8 questions; 5 is the default (about 3–5 minutes)
  ],
});
```

2. Register the lesson in `lessons/index.js` with `Registry.registerLesson({ id, number, title, description, path, files })`.
3. Run the checker: `node tools/validate.mjs`.

### Diagram style kit

Diagrams are inline SVG styled by CSS classes, so they follow light and dark mode automatically. The main classes are:

- `ln`: outline
- `part`: solid component
- `hatch`: fixed body/section
- `acc` / `acc-fill`: highlighted part
- `fl` / `fl-line`: fluid
- `hot` / `hot-fill`: pressure, force or heat
- `spring`: springs
- `dash`: alternate positions
- `lbl`, `lbl-b`, `lbl-sm`, `lbl-acc`, `lbl-hot`, `lbl-fl`: labels

For arrows, add `arr`, `arr-acc` or `arr-fl` to a path.

## Publish on GitHub Pages

1. Create an empty repository on GitHub (for example `self-study`).
2. Push this folder:

   ```bash
   git remote add origin https://github.com/<you>/self-study.git
   git push -u origin main
   ```

3. In the repository, go to **Settings → Pages**, set **Source: Deploy from a branch**, then **Branch: `main` / `(root)`**, and save.
4. The site appears at `https://<you>.github.io/self-study/` after a minute or so.

The included workflow (`.github/workflows/validate.yml`) runs the content checker on every push and pull request.

Because progress lives in each browser's localStorage, the published site keeps a separate progress record per browser and device. Use the Progress page's export/import to move it.
