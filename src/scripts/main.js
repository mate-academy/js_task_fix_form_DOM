'use strict';

const inputs = document.querySelectorAll('input');

function firstUpper(str) {
  return !str ? str : str[0].toUpperCase() + str.slice(1);
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();
  input.placeholder = firstUpper(input.name);
  input.before(label);
}
