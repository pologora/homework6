/* eslint-disable no-undef */
const highlightKeywords = require('../tasks/task2');

describe('HighlightKeyword function', () => {
  test('should return elements wraped in a span tag', () => {
    const keywords = ['JavaScript', 'template', 'tagged'];
    const template = 'Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.';

    expect(highlightKeywords(template, keywords)).toBe(
      `Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation.`,
    );
  });
});
