'use strict';

const inputs = document.querySelectorAll('input.field-text');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.getAttribute('name');

  const inputName = input.getAttribute('name');

  const capitalizedName
  = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.setAttribute('placeholder', capitalizedName);

  input.parentElement.appendChild(label);
});
