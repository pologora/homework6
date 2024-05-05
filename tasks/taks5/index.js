function throttle(fn, interval = 1000) {
  let called = false;

  return (...args) => {
    if (!called) {
      called = true;
      fn(...args);

      setTimeout(() => {
        called = false;
      }, interval);
    }
  };
}
function onScroll(event) {
  // eslint-disable-next-line no-console
  console.log('Scroll event: ', event);
}

const throttledScrollHandler = throttle(onScroll, 3000);

window.addEventListener('scroll', throttledScrollHandler);
