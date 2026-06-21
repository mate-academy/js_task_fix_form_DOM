'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  if (!input.id) {
    input.id = input.name;
  }

  label.htmlFor = input.id;

  label.textContent = input.name;

  const placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = placeholder;

  input.parentElement.prepend(label);
});
