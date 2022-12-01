'use strict';

const inputs = document.getElementsByTagName('input');
const label = document.createElement('label');

for (const input of inputs) {
  input.parentElement.children[0].before(label.cloneNode());

  const labelElement = input.parentElement.firstElementChild;

  labelElement.className = 'field-label';
  labelElement.htmlFor = input.id;
  labelElement.textContent = input.name;

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
}
