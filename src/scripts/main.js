'use strict';

const inputs = document.querySelectorAll('input');
let inputName = '';

for (const input of inputs) {
  const label = document.createElement('label');

  if (input.name.split('N').length >= 2) {
    inputName = input.name.split('N')[0].charAt(0).toUpperCase()
    + input.name.split('N')[0].slice(1)
    + ' N' + input.name.split('N')[1];
  } else {
    inputName = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  }

  input.placeholder = inputName;
  label.className = `field-label`;
  label.for = input.id;
  label.textContent = input.name;
  input.insertAdjacentElement('afterend', label);
}
