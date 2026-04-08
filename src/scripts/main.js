'use strict';

const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.className = 'field-label';
  label.textContent = getCorrectName(input.name);

  input.placeholder = getCorrectName(input.name);

  input.before(label);
}

function getCorrectName(string) {
  const newString = string.split('');

  for (let i = 0; i < newString.length; i++) {
    if (newString[i].toUpperCase() === newString[i]) {
      newString[i] = ' ' + newString[i];
    }
  }

  return newString[0].toUpperCase() + newString.join('').slice(1);
}
