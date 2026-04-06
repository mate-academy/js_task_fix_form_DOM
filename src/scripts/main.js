'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  const capitalizedName =
    inputName.charAt(0).toUpperCase() + inputName.slice(1);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = capitalizedName;

  input.placeholder = capitalizedName;

  input.parentNode.appendChild(label);
});
