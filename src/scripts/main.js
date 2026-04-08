'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  let correctPlaceholder = input.name[0].toUpperCase()
    + input.name.slice(1).toLowerCase();

  const n = correctPlaceholder.indexOf('name');

  if (correctPlaceholder.includes('name')) {
    correctPlaceholder = correctPlaceholder.slice(0, n)
    + ' ' + 'name';
  }

  input.placeholder = correctPlaceholder;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = correctPlaceholder.toUpperCase();
  label.htmlFor = input.name;

  input.parentElement.append(label);
}
