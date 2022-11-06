'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = splitByWord(input.name);
  input.closest('.field').prepend(label);

  input.placeholder
  = input.name[0].toUpperCase()
  + splitByWord(input.name.slice(1));
}

function splitByWord(string) {
  let result = '';

  for (const char of string) {
    if (char.toUpperCase() === char) {
      result += ' ';
    }
    result += char;
  }

  return result;
}
