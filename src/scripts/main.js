'use strict';

const inputs = document.querySelectorAll('input.field-text');

for (const input of inputs) {
  const labelTag = document.createElement('label');

  labelTag.className = 'field-label';
  labelTag.htmlFor = input.id;
  labelTag.textContent = input.name;

  input.before(labelTag);

  input.placeholder = convertedCamelCase(input.name);
}

function convertedCamelCase(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      result += string[i].toUpperCase();
    } else if (string[i] === string[i].toUpperCase()) {
      result += ` ${string[i]}`;
    } else {
      result += string[i];
    }
  }

  return result;
}
