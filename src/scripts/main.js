'use strict';

const newInput = document.querySelectorAll('input');

for (const input of newInput) {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';
  newLabel.htmlFor = input.id;
  newLabel.textContent = input.name;
  input.before(newLabel);
}
