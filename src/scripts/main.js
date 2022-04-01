'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  const n = input.name;

  input.placeholder = n.replace(n[0], n[0].toUpperCase());
  input.parentElement.append(label);
}
