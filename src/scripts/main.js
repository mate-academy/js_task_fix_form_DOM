'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();

  input.placeholder = input.name.charAt(0).toUpperCase()
  + input.name.slice(1).toLowerCase();
  input.parentNode.insertBefore(label, input);
});
