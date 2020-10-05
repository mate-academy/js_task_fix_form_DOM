'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

for (const input of inputs) {
  const inputLabel = document.createElement('label');

  inputLabel.classList.add('field-label');

  inputLabel.textContent = input.name;

  inputLabel.setAttribute('for', input.id);

  input.parentElement.appendChild(inputLabel);

  const placeholderText = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = placeholderText;
}
