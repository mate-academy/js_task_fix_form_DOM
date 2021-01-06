'use strict';

const inputs = document.querySelectorAll('input');
const getCapitalizeName = (str) => {
  let attrName = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      attrName += ` ${str[i]}`;
    } else {
      attrName += str[i];
    }
  }

  return attrName;
};

[...inputs].forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  input.insertAdjacentElement('beforebegin', label);
  input.placeholder = getCapitalizeName(input.name);
});
