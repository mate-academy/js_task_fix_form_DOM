'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', `${input.getAttribute('id')}`);
  label.textContent = `${input.getAttribute('name')}`;

  const parentElement = input.parentElement;

  parentElement.prepend(label);

  const nameInput = input.getAttribute('name');

  input.placeholder = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
});
