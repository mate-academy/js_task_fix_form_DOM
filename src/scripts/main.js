'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.placeholder =
    input.name[0].toUpperCase() +
    input.name.slice(1).replace(/([a-z])([A-Z])/g, '$1 $2');

  const field = input.parentElement;
  const label = document.createElement('label');

  label.innerHTML = `<label for="${input.id}" class="field-label">${input.name}</label>`;
  field.appendChild(label);
});
