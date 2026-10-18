'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.textContent = input.name;
  label.htmlFor = input.id;
  label.className = 'field-label';

  input.before(label);

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
});
