'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();
  input.insertAdjacentElement('beforebegin', label);

  input.placeholder = input.name.toUpperCase();
}
