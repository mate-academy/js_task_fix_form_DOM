'use strict';

const inputs = [...document.querySelectorAll('form > div > input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  const inputname = input.name;

  const capitalizedName = inputname[0].toUpperCase() + inputname.slice(1);

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  if (!input.id) {
    input.id = input.name;
  }

  label.textContent = input.name.replace(/_/g, ' ');

  if (input.parentNode) {
    input.parentNode.insertBefore(label, input);
  }

  input.placeholder = capitalizedName;
});
