'use strict';

const kebabCase = require('../../node_modules/lodash/kebabCase');

const inputList = [...document.querySelectorAll('input')];

for (const field of inputList) {
  const inputText = kebabCase(field.name).split('-').join(' ').toUpperCase();

  const label = document.createElement('label');

  field.placeholder = inputText;
  field.insertAdjacentElement('beforebegin', label);
  label.htmlFor = field.id;
  label.className = 'field-label';
  label.innerText = inputText;
}
