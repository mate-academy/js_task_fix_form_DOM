'use strict';

const fields = document.querySelectorAll('.field');
let counter = 0;

for (const field of fields) {
  const input = field.querySelector('.field-text');
  const label = document.createElement('label');

  label.textContent = input.name;
  input.id = 'field' + counter++;
  label.className = 'field-label';
  label.htmlFor = input.id;
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  field.appendChild(label);
}
