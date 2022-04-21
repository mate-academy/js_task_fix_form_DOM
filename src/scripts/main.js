'use strict';

const inputs = document.querySelectorAll('input');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');
  const input = inputs[i];

  input.parentElement.append(label);
  label.htmlFor = input.id;
  label.textContent = input.name;
  label.className = 'field-label';
  input.placeholder = input.name.toLowerCase();

  input.placeholder = input.placeholder.charAt(0).toUpperCase()
    + input.placeholder.slice(1);
}
