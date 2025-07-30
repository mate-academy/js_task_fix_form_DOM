'use strict';

const arrayOfInputs = document.querySelectorAll('form input');

arrayOfInputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name;
  input.parentNode.appendChild(label);

  const capitalize = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = capitalize;
});
