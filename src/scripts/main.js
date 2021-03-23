'use strict';

const inputs = document.querySelectorAll('input');
const inputsBlock = document.querySelectorAll('.field');

const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text
    .slice(1)
    .replace(/([A-Z][a-z]+)/g, ' $1 ')
    .trim();
};

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  inputs[i].placeholder = capitalize(inputs[i].name);
  label.htmlFor = inputs[i].id;
  label.className = 'field-label';
  label.innerText = capitalize(inputs[i].name);

  inputsBlock[i].append(label);
}
