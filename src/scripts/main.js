'use strict';

function createLabelFor(input) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = getName(input);

  input.before(label);
}

function setPlaceholderFor(input) {
  const nameOfInput = getName(input);

  input.placeholder = nameOfInput[0].toUpperCase() + nameOfInput.slice(1);
}

function getName(input) {
  return input.name.split(/(?=[A-Z])/g).join(' ');
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  createLabelFor(input);
  setPlaceholderFor(input);
});
