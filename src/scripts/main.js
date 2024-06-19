'use strict';

// write code here
function camelCaseToText(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^\w/, (c) => c.toUpperCase());
}

const dataInput = [...document.querySelectorAll('input')];

for (const input of dataInput) {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.classList.add('field-label');
  label.textContent = camelCaseToText(input.getAttribute('name'));

  input.placeholder = camelCaseToText(input.getAttribute('name'));
  input.parentNode.append(label);
}
