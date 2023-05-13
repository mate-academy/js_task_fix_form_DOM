'use strict';

const field = document.querySelectorAll('form');
const inputs = document.querySelectorAll('input');

for (const i of field) {
  for (const input of inputs) {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.setAttribute('for', input.id);
    label.textContent = input.name;

    input.placeholder = input.name.toUpperCase();

    label.append('field');
  }
}
