'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.parentNode.insertBefore(label, input);

  input.placeholder =
    input.name.slice(0, 1).toUpperCase() + input.name.slice(1);
});
