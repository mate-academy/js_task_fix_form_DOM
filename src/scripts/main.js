'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder = input.name[0].toUpperCase()
  + input.name.toLowerCase().slice(1);

  input.parentElement.append(label);
};
