'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  let labelText = input.name
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase();

  labelText = labelText.charAt(0).toUpperCase() + labelText.slice(1);
  label.textContent = labelText;
  input.placeholder = labelText;

  input.after(label);
});
