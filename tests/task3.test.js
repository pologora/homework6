/* eslint-disable no-undef */
const multiline = require('../tasks/task3');

describe('Multiline function', () => {
  const code = multiline`
function add(a, b) {
return a + b;
}
`;
  test('should return string with a line numbers', () => {
    expect(code).toBe(`
1 function add(a, b) {
2 return a + b;
3 }`);
  });
});
