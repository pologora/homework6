/* eslint-disable no-undef */
const localize = require('../tasks/task1');

describe('Localize function', () => {
  test('should return translation string', () => {
    const greeting = 'greet';
    const introduction = 'intro';

    expect(localize`${greeting}`).toBe('Hello');
    expect(localize`${introduction}`).toBe('Welcome to our website');
  });
});
