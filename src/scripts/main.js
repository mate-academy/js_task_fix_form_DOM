'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  input.insertAdjacentElement('beforebegin', label);

  input.setAttribute(
    'placeholder', `${input.name[0].toUpperCase() + input.name.slice(1)}`
  );
  label.className = 'field-label';
  label.setAttribute('for', `${input.id}`);
  label.textContent = `${input.name}`;
});
