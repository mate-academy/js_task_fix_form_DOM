'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = labelText;
  input.placeholder = labelText;

  const parentField = input.parentElement;

  parentField.insertBefore(label, input);
});
