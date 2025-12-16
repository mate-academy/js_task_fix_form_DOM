'use strict';

// write code here
const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');

  input.parentNode.insertBefore(label, input);

  input.setAttribute('placeholder', input.getAttribute('name'));
});
