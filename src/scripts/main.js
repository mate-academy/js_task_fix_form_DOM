'use strict';

// write code here
const inputs = document.querySelectorAll('input');

const wordPrettier = (string) => {
  return string
    .split('')
    .map((sym, i, arr) => {
      if (i === 0) {
        return sym.toUpperCase();
      }

      if (i !== arr.length - 1 && arr[i + 1] === arr[i + 1].toUpperCase()) {
        return sym + ' ';
      }

      return sym;
    })
    .join('');
};

for (const input of inputs) {
  const label = document.createElement('label');

  const inputName = wordPrettier(input.getAttribute('name'));

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = inputName;

  input.setAttribute('placeholder', inputName);
  input.parentNode.prepend(label);
}
