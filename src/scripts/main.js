'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

for (const input of inputs) {
  const inputLabel = document.createElement('label');

  inputLabel.classList.add('field-label');

  inputLabel.textContent = input.name;

  inputLabel.for = input.id;

  input.parentElement.appendChild(inputLabel);

  input.placeholder = input.name.toUpperCase();
}
