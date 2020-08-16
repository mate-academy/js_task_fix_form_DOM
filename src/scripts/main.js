'use strict';

for (const input of [...document.querySelectorAll('input')]) {
  input.placeholder = normalCase(input.name);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.parentNode.append(label);
}

function normalCase(str) {
  const noCamel = str.replace(/([A-Z])/g, ' $1').replace(/\s|_/g, ' ')
    .toLowerCase().split('');

  noCamel[0] = noCamel[0].toUpperCase();

  return noCamel.join('');
}
