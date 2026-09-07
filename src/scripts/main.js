'use strict';

// write code here
function formatFieldName(inputName) {
  const withSpaces = inputName.replace(/([A-Z])/g, ' $1').trim();

  return withSpaces
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const fieldName = formatFieldName(input.name);

  input.placeholder = fieldName;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = fieldName;

  input.parentElement.appendChild(label);
});
