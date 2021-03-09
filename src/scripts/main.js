'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  const match = input.name.match(/([A-Z]?[^A-Z]*)/g);

  const inputName = `${match[0]} ${match[1]}`;

  label.textContent = inputName;

  input.parentNode.append(label);

  label.className = 'field-label';
  label.htmlFor = inputName;

  input.placeholder = inputName.substring(0, 1).toUpperCase()
    + inputName.substring(1);
}
