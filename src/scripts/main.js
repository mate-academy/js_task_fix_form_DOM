'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.before(label);

  input.setAttribute('placeholder', input.name.toUpperCase());

});
