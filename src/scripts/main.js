'use strict';

const allInputs = document.querySelectorAll('input');

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  const inputName = input.name;
  const separated = inputName.replace(/([A-Z])/g, ' $1');
  const capitalized = separated.charAt(0).toUpperCase() + separated.slice(1);

  label.textContent = capitalized;
  input.parentNode.appendChild(label);

  input.placeholder = capitalized;
});
