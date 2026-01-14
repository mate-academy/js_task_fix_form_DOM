'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = input.name;

  const inputName = input.name;
  const capitalizedName = inputName[0].toUpperCase() + inputName.slice(1);

  input.placeholder = capitalizedName;

  const parentElement = input.parentElement;

  parentElement.append(label);
});
