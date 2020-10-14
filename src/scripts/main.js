'use strict';

const inputs = document.querySelectorAll('.field-text');

function createLabel(list) {
  for (const item of list) {
    const label = document.createElement('label');

    label.classList.add('field-label');
    label.htmlFor = item.id;
    label.textContent = item.name;

    item.parentElement.appendChild(label);

    item.placeholder = convertCamelCase(item.name);
  }
}

function convertCamelCase(string) {
  const stringWithSpaces = string.replace(/([A-Z])/g, ' $1').trim();

  return stringWithSpaces[0].toUpperCase() + stringWithSpaces.slice(1);
}

createLabel(inputs);
