'use strict';

const inputs = document.getElementsByTagName('input');

for (const input of inputs) {
  const toAdd = document.createElement('label');

  toAdd.className = 'field-label';
  toAdd.htmlFor = input.id;
  toAdd.textContent = input.name;
  input.closest('div').appendChild(toAdd);
  input.placeholder = input.name.toUpperCase();
}
