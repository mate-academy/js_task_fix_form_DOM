'use strict';

const inputs = document.getElementsByTagName('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.closest('div').appendChild(label);
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
}
