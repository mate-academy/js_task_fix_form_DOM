'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder = input.name;

  input.before(label);
}
