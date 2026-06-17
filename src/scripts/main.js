'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.name;

  const capitalizedName =
    inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.placeholder = capitalizedName;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = inputName;

  input.before(label);
});
