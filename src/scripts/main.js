'use strict';

const parentOfInputs = document.querySelectorAll('.field');

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input, index) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder = input.name.toUpperCase();

  parentOfInputs[index].append(label);
});
