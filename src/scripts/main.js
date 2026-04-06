'use strict';

const inputs = document.querySelectorAll('form .field-text');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  const nameInput = input.name;
  const placeholderText =
    nameInput.slice(0, 1).toUpperCase() + nameInput.slice(1);

  input.setAttribute('placeholder', placeholderText);

  input.parentElement.insertBefore(label, input);
});
