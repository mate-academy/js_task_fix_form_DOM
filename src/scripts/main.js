'use strict';

// write code here
const inputs = document.querySelectorAll('input');


for (const input of inputs) {
  const label = document.createElement('label');
  const inputName = input.name
    .split('')
    .map((ch) => {
      if (ch === ch.toUpperCase()) {
        return ' ' + ch;
      }
      return ch;
    }).join('');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = inputName;
  input.parentNode.append(label);

  const placeholder = inputName[0].toUpperCase() + inputName.slice(1);

  input.setAttribute('placeholder', placeholder);
}
