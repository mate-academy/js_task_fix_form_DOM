'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const correctPlaceholder = input.name[0].toUpperCase()
    + input.name.slice(1).toLowerCase();

  input.placeholder = correctPlaceholder;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name.toUpperCase();
  label.htmlFor = input.name;

  input.parentElement.append(label);
}
