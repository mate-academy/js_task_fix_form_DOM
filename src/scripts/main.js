'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  const parentDiv = input.parentElement;
  const label = document.createElement('label');

  label.textContent = input.name;
  label.className = 'field-label';
  label.setAttribute('for', input.id);
  parentDiv.insertBefore(label, input);
}
