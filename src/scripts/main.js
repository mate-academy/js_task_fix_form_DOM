'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  const labelText = input.name.replace(/([A-Z])/g, ' $1').trim();

  label.textContent = labelText.charAt(0).toUpperCase() + labelText.slice(1);

  input.placeholder = labelText.charAt(0).toUpperCase() + labelText.slice(1);

  input.parentElement.insertBefore(label, input);
});
