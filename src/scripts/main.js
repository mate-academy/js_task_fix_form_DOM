'use strict';

const allInputs = document.querySelectorAll('input');

for (const input of allInputs) {
  const inputLabel = document.createElement('label');

  inputLabel.className = 'field-label';
  inputLabel.textContent = input.name;
  inputLabel.htmlFor = input.id;

  input.before(inputLabel);
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
}
