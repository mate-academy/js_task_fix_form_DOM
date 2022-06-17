'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const placeholderName = input.name.replace(/[A-Z]/g, ' ' + '$&');
  const label = document.createElement('label');

  input.insertAdjacentElement('beforebegin', label);

  input.setAttribute(
    'placeholder',
    `${placeholderName[0].toUpperCase() + placeholderName.slice(1)}`
  );
  label.className = 'field-label';
  label.setAttribute('for', `${input.id}`);
  label.textContent = `${placeholderName}`;
});
