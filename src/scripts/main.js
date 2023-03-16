'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentElement.append(label);

  input.setAttribute('placeholder', (input.name).split('N').join(' N'));
  input.style = 'text-transform: capitalize;';
}
