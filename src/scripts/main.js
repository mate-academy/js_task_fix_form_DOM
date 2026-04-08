'use strict';

function createLabel(input) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', `${input.id}`);
  label.textContent = input.name;

  return label;
}

function capitalize(string) {
  const firstLetter = string.slice(0, 1).toUpperCase();

  return `${firstLetter}${string.slice(1)}`;
}

function fixInputs() {
  const inputList = document.querySelectorAll('.field-text');

  inputList.forEach(input => {
    const label = createLabel(input);

    input.before(label);
    input.setAttribute('placeholder', capitalize(input.name));
  });
}

fixInputs();
