'use strict';

// write code here

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const newLabel = document.createElement('label');

  newLabel.classList.add('field-label');
  newLabel.htmlFor = input.id;
  newLabel.textContent = input.name;

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
  input.before(newLabel);
});
