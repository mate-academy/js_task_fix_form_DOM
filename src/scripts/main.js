'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input) => {
  // fisrt part
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const labelText = input.name.toUpperCase();

  label.textContent = labelText;
  // second part
  input.placeholder = labelText;
  input.before(label);
});
