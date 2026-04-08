'use strict';

const elements = document.querySelectorAll('input');

for (const input of elements) {
  const label = document.createElement('label');

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.before(label);
}
