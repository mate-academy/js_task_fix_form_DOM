'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  input.setAttribute('placeholder',
    (input.name).split('N').join(' N').toUpperCase());

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name.toUpperCase();

  input.before(label);
}
