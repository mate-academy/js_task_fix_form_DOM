'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const inputName = getPreparedName(input.name);
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = inputName;
  label.htmlFor = input.id;

  input.insertAdjacentElement('beforebegin', label);
  input.placeholder = inputName;
});

function getPreparedName(camelCaseName) {
  return camelCaseName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (firstChar) => firstChar.toUpperCase());
}
