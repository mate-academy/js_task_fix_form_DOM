/* eslint-disable no-unused-vars */
'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.insertAdjacentElement('afterend', label);
});
