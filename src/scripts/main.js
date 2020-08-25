'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = inputs[i].id;
  label.textContent = inputs[i].name;
  inputs[i].before(label);

  inputs[i].placeholder = inputs[i].name[0].toUpperCase()
    + inputs[i].name.substring(1);
};
