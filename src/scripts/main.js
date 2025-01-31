'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.className = 'field-label';
  label.textContent = input.name;
  input.before(label);
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
}
