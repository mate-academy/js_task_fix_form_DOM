'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name;
  label.htmlFor = input.id;
  input.after(label);
  input.placeholder = input.name.toUpperCase();
}
