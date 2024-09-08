'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.getAttribute('name');

  input.setAttribute('placeholder', input.getAttribute('name'));
  input.parentNode.prepend(label);
}
