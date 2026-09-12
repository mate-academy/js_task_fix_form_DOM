'use strict';

const fieldInputs = document.querySelectorAll('.field-text');
let counter = 0;

for (const input of fieldInputs) {
  const label = document.createElement('label');

  label.textContent = input.name;
  input.id = 'field' + counter++;
  label.className = 'field-label';
  label.htmlFor = input.id;
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.before(label);
}