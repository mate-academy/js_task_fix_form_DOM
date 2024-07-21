/* eslint-disable prettier/prettier */
'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  const placeholderText = input.name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, str => str.toUpperCase());

  label.textContent = placeholderText;
  input.setAttribute('placeholder', placeholderText);
  input.parentElement.insertBefore(label, input);
});
