'use strict';

const inputsFromForm = document.querySelectorAll('.field-text');

inputsFromForm.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name;
  label.htmlFor = input.id;

  input.before(label);

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
});
