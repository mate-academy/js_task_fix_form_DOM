'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  const eltern = input.parentElement;

  eltern.append(label);
});

inputs.forEach((input) => {
  const placeHolder = input.name[0].toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', placeHolder);
});

// console.log(input);
