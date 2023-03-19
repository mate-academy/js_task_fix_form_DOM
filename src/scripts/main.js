'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.htmlFor = input.id;

  const inputName = input.name[0].toUpperCase()
  + input.name.slice(1).replace(/([A-Z])/g, ' $1');

  label.textContent = inputName;
  input.placeholder = inputName;

  input.parentElement.append(label);
});
