'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  const inputName = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = inputName;
  label.className = `field-label`;
  label.for = input.id;
  label.textContent = input.name;
  input.insertAdjacentElement('afterend', label);
}
