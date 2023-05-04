/* eslint-disable max-len */
'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.insertAdjacentElement('beforebegin', label);

  const placeholderName = input.name.charAt(0).toUpperCase() + input.name.slice(1).split(/(?=[A-Z])/).join(' ');

  input.placeholder = placeholderName;

  input.before(label);
});
