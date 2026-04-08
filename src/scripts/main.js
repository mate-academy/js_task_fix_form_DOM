'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.textContent = input.name;
  label.setAttribute('class', 'field-label');
  input.parentNode.insertBefore(label, input);
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
});
