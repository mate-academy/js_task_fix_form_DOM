'use strict';

const forms = document.querySelectorAll('form');
const inputs = [];

forms.forEach((form) => {
  const currentInputs = form.querySelectorAll('input');

  inputs.push(...currentInputs);
});

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name.replace(/([a-z])([A-Z])/g, '$1 $2');

  if (input.name) {
    const pHolder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.placeholder = pHolder.replace(/([a-z])([A-Z])/g, '$1 $2');
  }

  input.parentNode.appendChild(label);
});
