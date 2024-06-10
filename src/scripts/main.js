'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', input.id);
  newLabel.textContent = input.name;

  input.setAttribute('placeholder', input.name);
  input.parentNode.appendChild(newLabel);
});
