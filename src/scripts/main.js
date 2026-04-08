'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.name;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id || inputName;
  label.textContent = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.parentElement.insertBefore(label, input);
});
