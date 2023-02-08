'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');
  const inputName = input.name.charAt(0).toUpperCase()
    + input.name.slice(1).replace(/Name/, ' name');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = inputName;

  input.before(label);
  input.placeholder = inputName;
}
