'use strict';

const getInputs = document.querySelectorAll('form input');
const parentContainer = document.querySelector('.field');

console.log(getInputs);
for (const input of getInputs) {
  const elementLabel = document.createElement('label');
  elementLabel.className = 'field-label';
  elementLabel.htmlFor = input.id;
  elementLabel.textContent = input.name.toUpperCase();
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
  input.before(elementLabel);
}


