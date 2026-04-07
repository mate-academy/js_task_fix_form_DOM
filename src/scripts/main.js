'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.setAttribute('placeholder', `${input.getAttribute('name')}`);

  const label = document.createElement('label');

  label.className = 'field-label';
  input.insertAdjacentElement('beforebegin', label);
  label.textContent = input.getAttribute('name');
  label.setAttribute('for', `${input.getAttribute('id')}`);
});
