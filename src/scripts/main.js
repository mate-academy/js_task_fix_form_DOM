'use strict';

for (const input of document.querySelectorAll('input')) {
  input.placeholder = toNormalCase(input.name);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = toNormalCase(input.name);
  input.parentNode.append(label);
}

function toNormalCase(str) {
  const noCamel = str.replace(/([A-Z])/g, ' $1')
    .replace(/\s|_/g, ' ');

  return noCamel[0].toUpperCase() + noCamel.slice(1).toLowerCase();
}
