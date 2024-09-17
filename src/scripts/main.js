'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  let capitalizedInputName =
    inputName.charAt(0).toUpperCase() + inputName.slice(1);

  if (capitalizedInputName.includes('Name')) {
    capitalizedInputName = capitalizedInputName.replace('Name', ' Name');
  }

  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputName);
  label.textContent = capitalizedInputName;

  input.setAttribute('placeholder', capitalizedInputName);
  input.parentNode.appendChild(label);
});
