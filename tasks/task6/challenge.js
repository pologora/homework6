/* eslint-disable no-console */
function curry(fn, arity) {
  return function curried(...args) {
    if (args.length === arity) {
      const filteredArgs = args.filter((arg) => arg !== '_');
      return fn(...filteredArgs);
    } else {
      return function (...newArgs) {
        if (newArgs.length === 0) newArgs.push('_');
        return curried(...args, ...newArgs);
      };
    }
  };
}

function multiply(a = 1, b = 1, c = 1) {
  return a * b * c;
}

const curriedMultiply = curry(multiply, 3);

const step1 = curriedMultiply(2); // Returns a curried function
const step2 = step1(); // Returns a curried function
const result = step2(4); // Returns the final result: 2 * _ * 4 = 8

console.log('Result: ', result);
