'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  const inputName = input.name.split(/(?=[A-Z])/).join(' ');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = inputName;
  input.parentElement.append(label);

  const capitaliedName = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.placeholder = capitaliedName;
}
