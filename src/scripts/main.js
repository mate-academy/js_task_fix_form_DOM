'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const getLabel = document.createElement('label');

  getLabel.className = 'field-label';
  getLabel.htmlFor = input.id;
  getLabel.textContent = input.name;

  input.placeholder = input.name;

  input.parentElement.append(getLabel);
}
