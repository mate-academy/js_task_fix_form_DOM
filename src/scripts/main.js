'use strict';

const inputs = document.getElementsByClassName('field-text');

function normalizeString(string) {
  const result = string.replace(/([A-Z])/g, ' $1');
  const finalResult = result.charAt(0).toUpperCase() + result.slice(1);

  return finalResult;
}

function createLabel(input) {
  const label = document.createElement('label');

  label.textContent = input.getAttribute('name');
  label.setAttribute('for', input.getAttribute('id'));
  label.setAttribute('class', 'field-label');
  input.parentNode.insertBefore(label, input);
}

for (const input of inputs) {
  const nameOfInput = input.getAttribute('name');

  createLabel(input);
  input.setAttribute('placeholder', `${normalizeString(nameOfInput)}`);
}
