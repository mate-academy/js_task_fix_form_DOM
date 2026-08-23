'use strict';

const inputs = document.querySelectorAll('.field input');

inputs.forEach((input) => {
  input.placeholder = `${input.name.at(0).toUpperCase() + input.name.slice(1)}`;

  const parentField = input.parentElement;

  const label = document.createElement('label');

  label.classList.add('field-label');

  label.htmlFor = input.id;

  label.textContent = `${input.name}`;

  parentField.insertBefore(label, input);
});
