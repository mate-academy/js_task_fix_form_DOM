'use strict';

function convertCamelCase(text) {
  return text.replace(/([A-Z])/g, ' $1');
}

const inputs = document.querySelectorAll('.field > input');

for (const input of [...inputs]) {
  const label = document.createElement('label');
  const convertedName = convertCamelCase(input.name);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = convertedName;
  input.parentElement.append(label);

  input.placeholder = convertedName.toUpperCase();
}
