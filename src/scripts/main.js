'use strict';

const inputsContainer = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('.field-text');

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');
  const inputName = inputs[i].name;

  label.className = 'field-label';
  label.innerText = inputName.toUpperCase();
  label.htmlFor = inputs[i].id;

  inputsContainer[i].prepend(label);

  inputs[i].placeholder
    = (inputName.charAt(0).toUpperCase() + inputName.slice(1))
      .replace(/([A-Z]+)*([A-Z][a-z])/g, '$1 $2');
}
