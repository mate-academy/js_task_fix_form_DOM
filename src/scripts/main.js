'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input, index) => {
  if (input.name) {
    const capitalizedName =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);

    input.placeholder = capitalizedName;

    const label = document.createElement('label');

    label.className = 'field-label';
    label.textContent = capitalizedName;

    if (!input.id) {
      input.id = `input-${input.name || index}`;
    }

    label.setAttribute('for', input.id);

    input.parentElement.appendChild(label);
  }
});
