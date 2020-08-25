'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.innerText = input.name;
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.before(label);
});
