'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const container = input.parentElement;

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.placeholder = input.name.toUpperCase();

  container.append(label);
}
