'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.setAttribute('for', `${input.getAttribute('id')}`);
  label.classList.add('field-label');
  label.textContent = input.getAttribute('name');
  input.placeholder = `${input.getAttribute('name').toUpperCase()}`;
  input.parentNode.prepend(label);
}
