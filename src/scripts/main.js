'use strict';

const allInputs = document.querySelectorAll('input');

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.parentNode.appendChild(label);

  const inputName = input.name;
  const capitalized = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.placeholder = capitalized;
});
