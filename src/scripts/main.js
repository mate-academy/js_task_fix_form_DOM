'use strict';

const inputsText = document.querySelectorAll('.field-text');

[...inputsText].forEach((input) => {
  const idInput = input.getAttribute('id');
  const nameInput = input.getAttribute('name');
  const labelElement = document.createElement('label');
  const parentInput = input.closest('.field');

  labelElement.className = 'field-label';
  labelElement.setAttribute('for', idInput);
  labelElement.textContent = nameInput;

  parentInput.insertBefore(labelElement, input);
  input.placeholder = nameInput;
});
