'use strict';

function camelCaseToNormal(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (currentChar.toUpperCase() === currentChar) {
      result += ' ';
    }

    result += currentChar.toUpperCase();
  }

  return result;
}

const inputs = document.querySelectorAll('input');

inputs.forEach(elem => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', elem.id);
  label.textContent = camelCaseToNormal(elem.name);

  const placeholder = camelCaseToNormal(elem.name);

  elem.setAttribute('placeholder', placeholder);

  elem.before(label);
});
