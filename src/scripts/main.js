'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const getIdInput = input.id;

  label.textContent = input.name;
  label.setAttribute('for', getIdInput);
  label.setAttribute('class', 'field-label');
  input.parentElement.append(label);

  input.placeholder = normalCase(input.name);
}

function normalCase(str) {
  let newStringNormalCase = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStringNormalCase += ' ';
    }
    newStringNormalCase += str[i].toLowerCase();
  }

  newStringNormalCase = newStringNormalCase
    .charAt(0).toUpperCase() + newStringNormalCase.substr(1);

  return newStringNormalCase;
}
