'use strict';

const inputSelectors = [
  'form input[type="text"]',
  'form input[type="password"]',
];

const inputs = document.querySelectorAll(inputSelectors.join(', '));

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.parentElement.insertBefore(label, input);
});
