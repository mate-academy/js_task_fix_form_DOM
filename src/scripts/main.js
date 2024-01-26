'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const idElement = input.getAttribute('id');
  const nameElement = input.getAttribute('name')
    .replace(/([a-z])([A-Z])/g, '$1 $2');
  const inputInLabel = document.createElement('label');

  inputInLabel.textContent = nameElement;
  inputInLabel.className = 'field-label';
  inputInLabel.setAttribute('for', idElement);
  input.after(inputInLabel);

  input.placeholder
= nameElement.slice(0, 1).toUpperCase() + nameElement.slice(1);
});
