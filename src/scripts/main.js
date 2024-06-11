'use strict';

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  input.setAttribute('placeholder', input.name.toUpperCase());

  label.textContent = input.name;

  input.parentElement.insertBefore(label, input);
});
