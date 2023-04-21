'use strict';

const inputsFromForm = document.querySelectorAll('.field-text');

inputsFromForm.forEach(inputs => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = inputs.name;
  label.htmlFor = inputs.id;

  inputs.before(label);

  inputs.placeholder = inputs.name[0].toUpperCase() + inputs.name.slice(1);
});
