'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  label.textContent =
    input.name.charAt(0).toUpperCase() + input.name.slice(1).toLowerCase();

  input.placeholder =
    input.name.charAt(0).toUpperCase() + input.name.slice(1).toLowerCase();
  input.placeholder = label.textContent;
  input.parentElement.prepend(label);
});
