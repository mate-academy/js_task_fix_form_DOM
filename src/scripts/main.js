'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');
  const field = input.parentElement;
  const firstLetter = input.name[0].toUpperCase();

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.placeholder = firstLetter + input.name.slice(1);

  field.append(label);
});
