'use strict';

const inputs = document.querySelectorAll('form .field-text');

inputs.forEach((input) => {
  // fisrt part
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.textContent = labelText;
  // second part
  input.placeholder = labelText;
  input.before(label);
});
