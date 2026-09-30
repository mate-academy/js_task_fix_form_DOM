'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const formatInput = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = formatInput;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = formatInput;

  input.parentElement.prepend(label);
});
