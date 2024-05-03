function highlightKeywords(template, keywords) {
  return template.replace(/\${(\d+)}/g, (match, index) => {
    return `<span class='highlight'>${keywords[index]}</span>`;
  });
}

module.exports = highlightKeywords;
