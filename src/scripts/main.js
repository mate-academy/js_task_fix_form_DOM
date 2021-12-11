'use strict';

const inputs = document.querySelectorAll('input');

function firstLetterToUpperCase(string) {
  const splitedString = string.split('');

  splitedString[0] = splitedString[0].toUpperCase();

  return splitedString.join('');
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.innerText = firstLetterToUpperCase(input.name);
  input.placeholder = firstLetterToUpperCase(input.name);

  input.after(label);
}
