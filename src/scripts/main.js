'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const fieldName = formatFieldName(input.name);

  label.textContent = fieldName;
  input.placeholder = fieldName;

  input.parentNode.append(label);
});

function formatFieldName(str) {
  const withSpaces = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}
