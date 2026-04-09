'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.htmlFor = input.id;
  label.textContent = inputName;
  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);

  input.after(label);
});
