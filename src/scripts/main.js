'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;

  label.innerText = input.name.replace(/([A-Z])/g, ' $1');

  input.placeholder = (
    input.name[0].toUpperCase() + input.name.slice(1))
    .replace(/([A-Z])/g, ' $1')
    .trim();

  input.before(label);
});
