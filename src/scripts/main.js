'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.className = 'field-label';
  label.textContent = input.name;

  const capitalizedPlaceholder = input.name
    ? input.name.charAt(0).toUpperCase() + input.name.slice(1)
    : '';

  input.placeholder = capitalizedPlaceholder;

  input.parentNode.insertBefore(label, input);
});
