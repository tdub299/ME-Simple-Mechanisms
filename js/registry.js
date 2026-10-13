// Global registry that lesson and topic data files register themselves into.
// Data files are plain scripts (not fetch'd JSON) so the site also works from file://.
(function () {
  const lessons = new Map();

  window.Registry = {
    lessons,

    // Called from lessons/index.js
    registerLesson(lesson) {
      lessons.set(lesson.id, { ...lesson, topics: new Map(), loaded: false });
    },

    // Called from each topic file
    registerTopic(lessonId, topic) {
      const lesson = lessons.get(lessonId);
      if (!lesson) throw new Error(`Unknown lesson ${lessonId}`);
      lesson.topics.set(topic.n, topic);
    },

    getLesson(id) {
      return lessons.get(id);
    },

    // Loads every topic file of a lesson once, in parallel.
    async loadLesson(id) {
      const lesson = lessons.get(id);
      if (!lesson) return null;
      if (!lesson.loaded) {
        await Promise.all(lesson.files.map((f) => loadScript(lesson.path + f)));
        lesson.loaded = true;
      }
      return lesson;
    },
  };

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(s);
    });
  }
})();
