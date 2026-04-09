'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of [...inputs]) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.getAttribute('id'));

  let text = input.name[0].toUpperCase();

  for (let i = 1; i < input.name.length; i++) {
    if (input.name[i] === input.name[i].toUpperCase()) {
      text += ' ';
    }
    text += input.name[i];
  }

  label.textContent = text.toUpperCase();
  input.placeholder = text;
  input.parentElement.insertAdjacentElement('afterbegin', label);
}
