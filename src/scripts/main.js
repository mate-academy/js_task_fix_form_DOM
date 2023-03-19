'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  const placeholder = input.name.toLowerCase().includes('name')
    ? input.name.slice(0, 1).toUpperCase() + input.name.slice(1, -4)
      + ' ' + input.name.slice(-4).toLowerCase()
    : input.name.slice(0, 1).toUpperCase() + input.name.slice(1).toLowerCase();

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = placeholder.toUpperCase();
  input.setAttribute('placeholder', `${placeholder}`);
  input.parentElement.append(label);
}
