'use strict';

const forms = document.querySelectorAll('form');

const inputs = [];

forms.forEach((f) => {
  inputs.push(...f.querySelectorAll('input'));
});

inputs.forEach((input, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentNode.insertBefore(label, input);

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
});
