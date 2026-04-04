'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  const id = input.getAttribute('id');

  const formatedName = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', id);
  label.textContent = formatedName;

  input.placeholder = formatedName;

  input.parentElement.appendChild(label);
});
