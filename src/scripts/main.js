'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const resultInputs = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = resultInputs;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = resultInputs;
  label.setAttribute = ('for', input.id);
  input.before(label);
});
