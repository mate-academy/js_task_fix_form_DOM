'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  const text = input.name[0].toUpperCase() + input.name.slice(1);

  label.textContent = text;

  input.placeholder = text;

  input.parentElement.prepend(label);
});
