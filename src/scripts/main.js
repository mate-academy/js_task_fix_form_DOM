'use strict';

const inputs = [...document.querySelectorAll('input')];
const fields = [...document.querySelectorAll('.field')];

fields.forEach((field, index) => {
  const label = document.createElement('label');

  label.setAttribute('for', inputs[index].id);
  label.className = 'field-label';
  label.textContent = inputs[index].name;

  field.prepend(label);
});

inputs.forEach((input) => {
  const inputName = input.name;

  input.placeholder =
    inputName.slice(0, 1).toUpperCase() +
    inputName.slice(1, inputName.length).toLowerCase();
});
