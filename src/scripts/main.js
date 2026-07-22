'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const parentElement = input.parentElement;

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.setAttribute('placeholder', capitalize(input.name));
  parentElement.append(label);
}

function capitalize(value) {
  const symbols = value.split('');

  symbols[0] = symbols[0].toUpperCase();

  return symbols.join('');
}
