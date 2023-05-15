'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.classList.add('field-label');

  label.textContent = input.name;
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.parentNode.insertBefore(label, input);
});
