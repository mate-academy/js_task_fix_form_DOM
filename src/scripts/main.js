'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');
  const name = input.name.split(/(?=[A-Z])/).join(' ');

  label.htmlFor = input.id;
  label.textContent = name.toUpperCase();
  label.className = 'field-label';

  input.placeholder = name.charAt(0).toUpperCase() + name.slice(1);
  input.insertAdjacentElement('beforebegin', label);
}
