'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  label.textContent = input.name;

  input.setAttribute('placeholder',
    input.name.substring(0, 1).toUpperCase()
    + input.name.substring(1).toLowerCase());
  input.parentNode.appendChild(label);
});
