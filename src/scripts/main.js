'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.insertAdjacentElement('beforebegin', createLabel(input.name, input.id));
  input.placeholder = capitalize(input.name);
});

function createLabel(inputName, inputId) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = inputId;
  label.textContent = inputName;

  return label;
}

function capitalize(labelName) {
  return labelName[0].toUpperCase() + labelName.slice(1).toLowerCase();
}
