'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  const displayName = input.name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (char) => char.toUpperCase());

  label.textContent = displayName;
  input.placeholder = displayName;

  input.parentElement.insertBefore(label, input);
});
