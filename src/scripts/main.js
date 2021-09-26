'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.className = 'field-label';
  input.placeholder = firstLetterToUpperCase(input.name);

  input.before(label);
}

function firstLetterToUpperCase(string) {
  const stringSplit = string.split('');

  stringSplit[0] = stringSplit[0].toUpperCase();

  return stringSplit.join('');
}
