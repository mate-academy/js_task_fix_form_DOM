'use strict';

function convertCamelCase(text) {
  return text.replace(/([A-Z])/g, ' $1');
}

const inputs = document.querySelectorAll('.field > input');

for (const input of [...inputs]) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = convertCamelCase(input.name);
  input.parentElement.append(label);

  input.placeholder = convertCamelCase(input.name).toUpperCase();
}
