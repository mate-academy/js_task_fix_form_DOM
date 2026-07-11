'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.name;
  const inputId = input.id;

  const capitalizedName =
    inputName.charAt(0).toUpperCase() + inputName.slice(1);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', inputId);
  label.textContent = capitalizedName;

  input.placeholder = capitalizedName;

  input.parentElement.prepend(label);
});
