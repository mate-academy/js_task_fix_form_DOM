'use strict';

const inputs = document.getElementsByTagName('input');
const label = document.createElement('label');

for (const input of inputs) {
  input.parentElement.children[0].before(label.cloneNode());

  const labelElement = input.parentElement.firstElementChild;

  labelElement.className = 'field-label';
  labelElement.htmlFor = input.id;
  labelElement.textContent = splitCamelCase(input.name);

  const inputName = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = splitCamelCase(inputName);
}

function splitCamelCase(str) {
  return str.replace(/[a-z](?=[A-Z])/g, '$& ');
}
