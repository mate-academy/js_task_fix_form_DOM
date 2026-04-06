'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {

  const inputName = input.getAttribute('name');

  if (!input.id) {
    input.id = `input-${inputName}`;
  }

  const label = document.createElement('label');

  label.className = 'field-label';

  label.setAttribute('for', input.id);

  label.textContent = inputName;

  const capitalizedName = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.placeholder = capitalizedName;

  input.parentElement.prepend(label);
});
