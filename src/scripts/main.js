'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const { name: inputName, id } = input;
  const label = document.createElement('label');

  label.textContent = inputName.toUpperCase();
  label.className = 'field-label';
  label.htmlFor = id;

  input.placeholder = inputName.toUpperCase();
  input.insertAdjacentElement('beforebegin', label);
});
