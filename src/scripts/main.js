'use strict';

const inputsContainer = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('.field-text');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');
  const nameOfInput = inputs[i].name.toUpperCase();

  label.className = 'field-label';
  label.innerText = nameOfInput;
  label.htmlFor = inputs[i].id;

  inputsContainer[i].prepend(label);

  inputs[i].placeholder = nameOfInput;
}
