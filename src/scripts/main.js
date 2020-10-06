'use strict';

const inputs = [...document.querySelectorAll('.field-text')];

for (const input of inputs) {
  const inputLabel = document.createElement('label');

  inputLabel.classList.add('field-label');

  inputLabel.textContent = input.name;

  inputLabel.setAttribute('for', input.id);

  input.parentElement.appendChild(inputLabel);

  const placeHoldName = input.name.replace(/([A-Z])/g, ` $1`).toLowerCase();

  // eslint-disable-next-line max-len
  const placeholderText = placeHoldName[0].toUpperCase() + placeHoldName.slice(1);

  input.placeholder = placeholderText;
}
