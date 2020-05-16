// Avoid `console` errors in browsers that lack a console.
(function () {
  let method;
  const noop = function () {};
  const methods = [
    'assert',
    'clear',
    'count',
    'debug',
    'dir',
    'dirxml',
    'error',
    'exception',
    'group',
    'groupCollapsed',
    'groupEnd',
    'info',
    'log',
    'markTimeline',
    'profile',
    'profileEnd',
    'table',
    'time',
    'timeEnd',
    'timeline',
    'timelineEnd',
    'timeStamp',
    'trace',
    'warn'
  ];
  let { length } = methods;
  const console = (window.console = window.console || {});

  if (method === undefined) return;
  while (length > 0) {
    method = methods[parseInt(length, 0)];

    // Only stub undefined methods.
    if (!console[method.toString()]) {
      console[method.toString()] = noop;
    }
    length -= 1;
  }
}());
