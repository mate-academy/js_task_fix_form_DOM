'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.classList.add('field-label');
  label.innerText = input.name;

  input.parentNode.insertBefore(label, input);
  input.setAttribute('placeholder', input.name);
});
