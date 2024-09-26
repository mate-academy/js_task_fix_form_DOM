'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  const label = document.createElement('label');
  const placeholder = input.name.replace(/([a-z])([A-Z])/g, '$1 $2');

  label.setAttribute('for', input.id);
  label.classList.add('field-label');

  label.textContent
  = input.name.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase();

  input.placeholder
  = placeholder.charAt(0).toUpperCase() + placeholder.slice(1);

  input.parentNode.insertBefore(label, input);
});
