'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

[...inputs].forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const inputName = input.name.replace(/([A-Z])/g, ' $1');
  const fieldName = `${inputName[0].toUpperCase()}${inputName.substring(1)}`;

  label.textContent = fieldName;
  label.htmlFor = input.id;

  input.placeholder = fieldName;

  input.before(label);
});
