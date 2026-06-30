'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);
  label.textContent = input.name || 'Field label';

  input.placeholder = input.name.toUpperCase();

  input.before(label);
});
