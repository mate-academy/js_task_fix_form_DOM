'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  const parentElement = input.parentElement;

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.setAttribute('placeholder', input.name.toUpperCase());

  parentElement.appendChild(label);
});
