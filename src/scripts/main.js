'use strict';

const inputs = document.querySelectorAll('input');
const inputsBlock = document.querySelectorAll('.field');

const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  inputs[i].placeholder = capitalize(inputs[i].name);
  label.htmlFor = inputs[i].id;
  label.className = 'field-label';
  label.innerText = inputs[i].name;

  inputsBlock[i].append(label);
}
