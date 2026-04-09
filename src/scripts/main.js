'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  if (input.name) {
    input.placeholder =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);
  }

  const label = document.createElement('label');

  label.classList.add('field-label');

  if (!input.id) {
    input.id = 'input-' + Math.random();
  }

  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.parentNode.appendChild(label);
});
