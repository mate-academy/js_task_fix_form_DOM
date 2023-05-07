'use strict';

const formInputs = document.querySelectorAll('form input');

formInputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  input.parentElement.appendChild(label);
});

formInputs.forEach(input => {
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
});
