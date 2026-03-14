'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  if (!input.id) {
    input.id = `input-${input.name}`;
  }

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);

  const text = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.textContent = text;
  input.placeholder = text;
  input.parentElement.insertBefore(label, input);
});
