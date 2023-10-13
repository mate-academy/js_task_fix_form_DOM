'use strict';

const inputs = document.querySelectorAll('input');

function firstUpper(str) {
  if (!str) {
    return str;
  }

  let result = str[0].toUpperCase() + str.slice(1);

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result = result.slice(0, i) + ' ' + result.slice(i);
    }
  }

  return result;
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = firstUpper(input.name).toUpperCase();
  input.placeholder = firstUpper(input.name);
  input.before(label);
}
