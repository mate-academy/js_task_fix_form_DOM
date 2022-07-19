'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.insertAdjacentElement('beforebegin', label);
});
