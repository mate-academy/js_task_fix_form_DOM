'use strict';

const inputs = document.querySelectorAll('input');

function placeholder(input) {
  const nameOfInput = getName(input);

  input.placeholder = nameOfInput[0].toUpperCase() + nameOfInput.slice(1);
}

function getName(input) {
  return input.name.replace(/([A-Z])/g, ' $1');
}

[...inputs].forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = getName(input);

  input.before(label);

  placeholder(input);
});
