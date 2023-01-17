'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.placeholder = input.name[0].toUpperCase()
  + input.name.slice(1).replace(/([A-Z])/g, ' $1');

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name.replace(/([A-Z])/g, ' $1');

  input.after(label);
}
