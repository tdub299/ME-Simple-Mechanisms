// Progress persistence. Everything lives under one localStorage key so it can be
// exported and imported as a single JSON blob.
(function () {
  const KEY = 'selfstudy.progress.v1';
  const PASS_RATIO = 0.8;

  function blank() {
    return { version: 1, lessons: {} };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return blank();
      const data = JSON.parse(raw);
      return data && data.lessons ? data : blank();
    } catch {
      return blank();
    }
  }

  let state = load();

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
      return true;
    } catch {
      return false;
    }
  }

  function lessonState(lessonId) {
    if (!state.lessons[lessonId]) state.lessons[lessonId] = { topics: {} };
    return state.lessons[lessonId];
  }

  window.Progress = {
    PASS_RATIO,

    passMark(questionCount) {
      return Math.ceil(questionCount * PASS_RATIO);
    },

    topic(lessonId, n) {
      return (state.lessons[lessonId] && state.lessons[lessonId].topics[n]) || null;
    },

    isPassed(lessonId, n) {
      const t = this.topic(lessonId, n);
      return !!(t && t.passed);
    },

    // Topic 1 is always open; every later topic opens once the previous one is passed.
    isUnlocked(lessonId, n) {
      return n === 1 || this.isPassed(lessonId, n - 1);
    },

    passedCount(lessonId) {
      const l = state.lessons[lessonId];
      if (!l) return 0;
      return Object.values(l.topics).filter((t) => t.passed).length;
    },

    // First unlocked topic that has not been passed yet, or null when all are done.
    current(lessonId, total) {
      for (let n = 1; n <= total; n++) {
        if (!this.isPassed(lessonId, n)) return n;
      }
      return null;
    },

    recordAttempt(lessonId, n, score, total) {
      // Re-read first so a save from another open tab is merged, not overwritten.
      state = load();
      const l = lessonState(lessonId);
      const prev = l.topics[n] || { attempts: 0, best: 0, passed: false };
      const passed = score >= this.passMark(total);
      l.topics[n] = {
        attempts: prev.attempts + 1,
        best: Math.max(prev.best, score),
        total,
        passed: prev.passed || passed,
        passedAt: prev.passedAt || (passed ? new Date().toISOString() : undefined),
        lastAttemptAt: new Date().toISOString(),
      };
      save();
      return passed;
    },

    // Called when another tab changes progress.
    reload() {
      state = load();
    },

    resetLesson(lessonId) {
      state = load();
      delete state.lessons[lessonId];
      save();
    },

    exportJSON() {
      return JSON.stringify(state, null, 2);
    },

    importJSON(text) {
      const data = JSON.parse(text);
      if (!data || typeof data.lessons !== 'object') throw new Error('Not a progress file');
      state = data;
      save();
    },

    storageWorks() {
      try {
        const k = KEY + '.probe';
        localStorage.setItem(k, '1');
        localStorage.removeItem(k);
        return true;
      } catch {
        return false;
      }
    },
  };
})();
