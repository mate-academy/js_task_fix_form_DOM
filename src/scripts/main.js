'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.setAttribute('placeholder', correctName(input.name));

  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.className = 'field-label';
  label.textContent = input.placeholder;

  input.before(label);
}

function correctName(str) {
  const newStr = str
    .split('')
    .map((el, i) => {
      if (i === 0) {
        return el.toUpperCase();
      }

      if (el === el.toUpperCase() && i !== 0) {
        return ' ' + el;
      }

      return el;
    })
    .join('');

  return newStr;
}
