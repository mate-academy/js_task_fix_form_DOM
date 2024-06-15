'use strict';

const fields = [...document.querySelectorAll('.field-text')];

fields.forEach((field) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = field.id;
  label.textContent = transformCamelCase(field.name);

  field.placeholder = transformCamelCase(field.name);

  field.insertAdjacentElement('afterend', label);
});

function transformCamelCase(strCamelCase) {
  const normalizedStr = strCamelCase.replace(/([A-Z])/g, ' $1');

  const result = normalizedStr
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  return result;
}
