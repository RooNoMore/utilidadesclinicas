(function (global) {
  function sanitize(dirty) {
    // Simple stub: return input unmodified
    return dirty;
  }
  global.DOMPurify = { sanitize: sanitize };
})(typeof window !== 'undefined' ? window : globalThis);
