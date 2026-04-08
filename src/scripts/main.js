'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const labels = document.createElement('label');

  labels.className = 'field-label';
  labels.setAttribute('for', input.id);
  labels.textContent = input.name;
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  input.before(labels);
}
