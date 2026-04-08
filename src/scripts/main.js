'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.textContent = `${labelText}`;

  label.setAttribute('for', input.id);
  input.placeholder = labelText;
  input.before(label);
});
