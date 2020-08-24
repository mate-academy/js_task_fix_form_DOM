'use strict';

const inputs = [...document.querySelectorAll('.field-text')];
const field = [...document.querySelectorAll('.field')];

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = inputs[i].id;
  label.textContent = inputs[i].name;
  inputs[i].placeholder = inputs[i].name.toUpperCase();
  field[i].append(label);
};
