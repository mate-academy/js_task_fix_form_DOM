'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(function(input) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.placeholder = input.name.toUpperCase();

  input.after(label);
});
