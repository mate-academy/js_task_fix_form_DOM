'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

  input.placeholder = (
    input.name.charAt(0).toUpperCase() + input.name.slice(1)
  ).replace(/([a-z0-9])([A-Z])/g, '$1 $2');
  input.parentNode.insertBefore(label, input);
});
