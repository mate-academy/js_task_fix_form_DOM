'use strict';

// write code here

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const names = input.name;
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = names;
  input.placeholder = names.charAt(0).toUpperCase() + names.slice(1);
  input.parentElement.appendChild(label);
});
