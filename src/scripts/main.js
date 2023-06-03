'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  const placeholderText = input.name.charAt(0).toUpperCase()
    + input.name.slice(1);

  input.setAttribute('placeholder', placeholderText);

  input.before(label);
});
