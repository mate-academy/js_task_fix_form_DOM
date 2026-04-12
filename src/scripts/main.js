'use strict';

const allInputs = document.querySelectorAll('form input');

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  const capitalizedName =
    input.name
      .charAt(0)

      .toUpperCase() + input.name.slice(1);

  input.placeholder = capitalizedName;

  input.parentElement.prepend(label);
});
