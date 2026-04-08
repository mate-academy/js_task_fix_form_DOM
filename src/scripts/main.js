'use strict';

// write code here
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.textContent = input.name;

  if (!input.id) {
    input.id = `input-${index}`;
  }

  label.setAttribute('for', input.id);
  input.before(label);

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
});
