'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = `field-label`;
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder = input.name
    .replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, c => c.toUpperCase());

  input.append(label);
}
