'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  const label = document.createElement('label');

  input.before(label);
  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder
    = label.textContent[0].toUpperCase()
    + label.textContent.slice(1).toLowerCase();
});
