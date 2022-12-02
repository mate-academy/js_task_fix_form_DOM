'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentNode.append(label);

  const placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', placeholder);
}
