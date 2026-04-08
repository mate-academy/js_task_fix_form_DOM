'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');

  const label = document.createElement('label');
  label.className = 'field-label';
  label.setAttribute('for', input.id);

  label.textContent = inputName.charAt(0).toUpperCase() + inputName.slice(1);


  input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.parentNode.insertBefore(label, input);
});
