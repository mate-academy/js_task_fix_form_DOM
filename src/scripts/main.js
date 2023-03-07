'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  input.setAttribute('placeholder', (input.name).split('N').join(' N'));
  input.style = 'text-transform: capitalize;';

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.placeholder;

  input.before(label);
}
