'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = `${input.name.replace(/([A-Z])/g, ' $1').trim()}`;
  input.parentElement.append(label);

  input.placeholder = input.name[0].toUpperCase()
    + input.name.slice(1).replace(/([A-Z])/g, ' $1').trim();
}
