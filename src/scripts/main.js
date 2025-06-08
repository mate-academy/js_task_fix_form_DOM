'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input) => {
  const label = document.createElement('label');
  const inputName = input.name;

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  label.textContent = inputName;

  const capitalized = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.placeholder = capitalized;

  input.parentNode.insertBefore(label, input);
});
