'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  input.placeholder = input.name[0].toUpperCase()
  + input.name.slice(1).split('N').join(' N');
  label.className = `field-label`;
  label.for = input.id;

  label.textContent = input.name[0].toUpperCase()
  + input.name.slice(1).split('N').join(' N'); ;
  input.insertAdjacentElement('afterend', label);
}
