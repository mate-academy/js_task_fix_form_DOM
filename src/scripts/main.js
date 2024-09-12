'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.name;
  const inputId = input.id;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', inputId);
  label.textContent = inputName;

  input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.parentNode.append(label);
});
