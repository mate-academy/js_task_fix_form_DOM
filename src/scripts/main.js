'use strict';

const inputElement = document.querySelectorAll('input');

inputElement.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  input.parentElement.appendChild(label);
});
