'use strict';

const fields = document.querySelectorAll('.field');

for (const field of fields) {
  const label = document.createElement('label');
  const input = field.querySelector('input');
  const inputName = toNormalCase(input.name);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = inputName;

  input.placeholder = inputName;

  field.append(label);
}

function toNormalCase(inputName) {
  let stringToNormalCase = '';

  for (const letter of inputName) {
    if (letter === letter.toUpperCase()) {
      stringToNormalCase += ' ';
    }

    stringToNormalCase += letter.toLowerCase();
  }

  return stringToNormalCase[0].toUpperCase()
    + stringToNormalCase.slice(1);
}
