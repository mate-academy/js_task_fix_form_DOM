'use strict';

// write code here

const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
  const label = document.createElement('label');
  const field = input.parentElement;

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.replace(/([A-Z])/g, ' $1').toUpperCase();

  input.placeholder = input.name[0].toUpperCase()
    + input.name.slice(1).replace(/([A-Z])/g, ' $1');

  field.append(label);
}
