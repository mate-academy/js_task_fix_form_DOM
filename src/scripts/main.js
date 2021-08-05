'use strict';

const inputsText = document.querySelectorAll('.field-text');

[...inputsText].forEach((input) => {
  const idInput = input.getAttribute('id');
  const nameInput = input.getAttribute('name');
  const label = document.createElement('label');
  const parentInput = input.closest('.field');

  label.className = 'field-label';
  label.setAttribute('for', idInput);
  label.textContent = nameInput;

  parentInput.insertBefore(label, input);
  input.placeholder = nameInput;
});
