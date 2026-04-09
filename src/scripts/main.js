'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((el) => {
  const id = el.getAttribute('id');
  const fieldName = el.getAttribute('name');
  const label = document.createElement('label');

  label.htmlFor = id;
  label.textContent = camelCaseToNormal(fieldName);
  label.className = 'field-label';

  el.insertAdjacentElement('beforebegin', label);
  el.setAttribute('placeholder', camelCaseToNormal(fieldName));
});

function camelCaseToNormal(text) {
  return text
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
}
