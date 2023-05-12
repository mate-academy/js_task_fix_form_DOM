'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const label = document.createElement('label');

  input.parentElement.append(label);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();

  input.placeholder = input.name
    .slice(0, 1).toUpperCase()
    + input.name.slice(1);
});
