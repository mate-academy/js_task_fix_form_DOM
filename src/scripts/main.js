'use strict';

const inputs = [...document.querySelectorAll('input')];

const formatCamelCase = (str) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (string) => {
      return string.toUpperCase();
    })
    .trim();
};

inputs.forEach((input) => {
  const labelElem = document.createElement('label');

  labelElem.className = 'field-label';

  labelElem.htmlFor = input.id;

  labelElem.textContent = formatCamelCase(input.name);

  input.insertAdjacentElement('beforebegin', labelElem);

  input.placeholder = formatCamelCase(input.name);
});
