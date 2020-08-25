'use strict';

const inputs = [...document.querySelectorAll('.field-text')];
const field = [...document.querySelectorAll('.field')];

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = inputs[i].id;
  label.textContent = inputs[i].name;

  const placeHolderValue = inputs[i].name[0].toUpperCase()
    + inputs[i].name.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase();

  inputs[i].placeholder = placeHolderValue;

  field[i].append(label);
};
