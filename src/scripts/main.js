'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.name;
  const inputId = input.id;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', inputId);

  const capitalized = inputName[0].toUpperCase() + inputName.slice(1);

  label.textContent = capitalized;
  input.placeholder = capitalized;

  input.parentElement.append(label);
});
