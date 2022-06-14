'use strict';

// write code here
const inputsnodeist = document.querySelectorAll('.field-text');

const inputs = [...inputsnodeist];

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = inputs[i].id;

  inputs[i].placeholder = inputs[i].name.toUpperCase();

  inputs[i].parentElement.appendChild(label);
}
