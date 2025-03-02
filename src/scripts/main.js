'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  const placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.setAttribute('placeholder', placeholder);
  input.parentNode.prepend(label);
});
