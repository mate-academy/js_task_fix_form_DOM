'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.name;
  const capitalized = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.placeholder = capitalized;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = capitalized;

  input.parentElement.appendChild(label);
});
