function throttle(fn, delay = 3000) {
  let shouldWait = false;
  let lastArgs = null;

  return (...args) => {
    if (shouldWait) {
      lastArgs = args;
    } else {
      fn(...args);
      shouldWait = true;
      setTimeout(helper, delay);
    }

    function helper() {
      if (lastArgs) {
        fn(...lastArgs);
        lastArgs = null;
        shouldWait = true;
        setTimeout(helper, delay);
      } else {
        shouldWait = false;
      }
    }
  };
}

function onScroll(event) {
  // eslint-disable-next-line no-console
  console.log('Scroll event: ', event.timeStamp);
}

const throttledScrollHandler = throttle(onScroll);

window.addEventListener('scroll', throttledScrollHandler);
