'use strict';

const inputs = Array.from(document.querySelectorAll('input'));

inputs.forEach((input) => {
  const label = document.createElement('label');
  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name');

  input.placeholder = `${inputName}`;

  input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  label.setAttribute('for', inputId);

  label.classList.add('field-label');

  label.textContent = `${inputName}`;

  input.parentNode.insertBefore(label, input);
});
