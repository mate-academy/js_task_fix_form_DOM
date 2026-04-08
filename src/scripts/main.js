'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.parentNode.insertBefore(label, input);
});

inputs.forEach((input) => {
  input.setAttribute('placeholder', input.name.toUpperCase());
});
