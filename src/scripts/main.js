'use strict';

const startCase = require('../../node_modules/lodash/startCase');

const inputList = [...document.querySelectorAll('input')];

for (const field of inputList) {
  const inputText = startCase(field.name).toUpperCase();

  const label = document.createElement('label');

  field.placeholder = inputText;
  field.insertAdjacentElement('beforebegin', label);
  label.htmlFor = field.id;
  label.className = 'field-label';
  label.innerText = inputText;
}
