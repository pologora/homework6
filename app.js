function foo(template) {
  return custom`${template}`;
}

function custom(strings, ...values) {
  console.log(strings);
  return values.reduce((resultString, value, index) => {
    return `${resultString}"${value}"${strings[index + 1]}`;
  }, strings[0]);
}
const name = 'Olek';
const hobby = 'Books';

// console.log(custom`My name is ${name} and I love ${hobby}`);
console.log(foo(`My name is ${name} and I love ${hobby}`));
