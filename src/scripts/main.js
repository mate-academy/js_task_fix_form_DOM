'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.getAttribute('name'));

  const inputName = input.getAttribute('name');
  const capitalizedInputName =
    inputName.charAt(0).toUpperCase() + inputName.slice(1);

  label.textContent = capitalizedInputName;
  input.setAttribute('placeholder', capitalizedInputName);
  input.parentNode.appendChild(label);
});
