'use strict';

const arrOfInputs = document.querySelectorAll('form input');

for (const input of arrOfInputs) {
  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';
  newLabel.htmlFor = input.id;
  newLabel.textContent = input.name.toUpperCase();

  input.before(newLabel);
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
}
