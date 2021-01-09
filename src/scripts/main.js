'use strict';

const input = document.querySelectorAll('.field-text');
const arrOfInputs = [...input];

function fromCamelCase(str) {
  const newStr = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return newStr;
}

arrOfInputs.map((el) => (
  el.placeholder = fromCamelCase(el.name[0]).toUpperCase()
    + fromCamelCase(el.name.slice(1))
));

for (const key of arrOfInputs) {
  const label = document.createElement('label');

  label.htmlFor = key.id;
  label.className = 'field-label';
  label.innerText = fromCamelCase(key.name).toUpperCase();
  key.before(label);
}
