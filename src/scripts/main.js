'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  const capitalized =
    input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = capitalized;

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.before(label);
});
