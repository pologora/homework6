function multiline(strings) {
  const array = strings[0].split('\n');

  const result = array
    .map((item, i) => {
      if (item) {
        return `\n${i} ${item}`;
      }
    })
    .filter(Boolean)
    .join('');

  return result;
}

module.exports = multiline;
