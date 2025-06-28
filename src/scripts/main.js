'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];
const fields = [...document.querySelectorAll('.field')];

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = inputs[i].id;
  label.textContent = inputs[i].name.toUpperCase();
  fields[i].prepend(label);

  inputs[i].placeholder =
    inputs[i].name[0].toUpperCase() + inputs[i].name.slice(1);
}
