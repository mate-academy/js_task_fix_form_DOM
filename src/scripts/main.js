'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();
  label.className = 'field-label';

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  input.insertAdjacentElement('beforebegin', label);
}
