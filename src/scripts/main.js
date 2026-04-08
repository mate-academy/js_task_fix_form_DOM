'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = inputName;

  const capitalizedName =
    inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.setAttribute('placeholder', capitalizedName);

  input.parentElement.append(label);
});
