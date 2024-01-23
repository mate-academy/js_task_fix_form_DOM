'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const idElement = input.getAttribute('id');
  const nameElement = input.getAttribute('name');
  const inputLabel = document.ctreateElement('label');

  inputLabel.textContent = nameElement;
  inputLabel.className = 'field-label';
  inputLabel.setAttribute('for', idElement);
  input.after(inputLabel);

  input.placeholder
  = nameElement.charAt(0).toUpperCase() + nameElement.slice(1);
});
