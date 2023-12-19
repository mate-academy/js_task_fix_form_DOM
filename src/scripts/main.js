'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.placeholder = input.name
    .split(/(?=[A-Z])/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  const labelElement = document.createElement('label');

  labelElement.textContent = input.placeholder;
  labelElement.className = 'field-label';
  labelElement.htmlFor = input.name;
  input.id = input.name;

  input.parentNode.insertBefore(labelElement, input);
});
