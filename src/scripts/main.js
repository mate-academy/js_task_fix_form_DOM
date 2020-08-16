'use strict';

for (const input of [...document.querySelectorAll('input')]) {
  input.placeholder = input.name;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.parentNode.append(label);
}
