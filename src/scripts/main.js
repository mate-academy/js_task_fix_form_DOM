'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const parentOfInput = input.parentElement;
  const label = document.createElement('label');
  const inputName = input.name.split(/(?=[A-Z])/).join(' ');

  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);
  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = inputName;

  parentOfInput.prepend(label);
}
