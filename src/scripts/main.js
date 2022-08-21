'use strict';

const inputs = document.querySelectorAll('input');

function getSeperateWord(str) {
  let result = '';

  for (const letter of str) {
    if (letter.toUpperCase() !== letter) {
      result += letter;
    } else {
      result += ` ${letter}`;
    }
  }

  return result[0].toLocaleUpperCase() + result.slice(1);
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.innerHTML = getSeperateWord(input.name);
  input.parentElement.append(label);
  input.placeholder = getSeperateWord(input.name);
}
