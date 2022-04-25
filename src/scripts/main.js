'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name;

  label.setAttribute('for', input.getAttribute('id'));
  input.parentElement.append(label);

  input.placeholder = input.name.slice(0, 1).toUpperCase()
    + input.name.slice(1);
});
