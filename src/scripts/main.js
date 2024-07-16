'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input) => {
  input.setAttribute('placeholder', input.name.toUpperCase());

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.before(label);
});
