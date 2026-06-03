'use strict';

const inputs = document.querySelectorAll('form input');

function capitalize(text) {
  return text ? text.charAt(0).toUpperCase() + text.slice(1) : '';
}

function createAndAppendLabel(inputElement) {
  const label = document.createElement('label');
  const labelText = capitalize(inputElement.name);

  label.className = 'field-label';
  label.htmlFor = inputElement.id;
  label.textContent = labelText;

  inputElement.placeholder = labelText;
  inputElement.parentElement.appendChild(label);
}

for (const input of inputs) {
  createAndAppendLabel(input);
}
