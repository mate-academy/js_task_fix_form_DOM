'use strict';

const inputs = document.querySelectorAll('.field input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  input.parentElement.appendChild(label);
});
