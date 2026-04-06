'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

function makeHumanTextFormName(fieldName) {
  if (!fieldName) {
    return '';
  }

  const words = fieldName
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .split(' ');

  return words.map((word) => word[0].toUpperCase() + word.slice(1)).join(' ');
}

inputs.forEach((input) => {
  const fieldName = input.getAttribute('name');

  const labelText = makeHumanTextFormName(fieldName);
  const placeholderText = labelText;

  const label = document.createElement('label');

  label.className = 'field-label';

  label.setAttribute('for', input.id);

  label.textContent = labelText;

  input.setAttribute('placeholder', placeholderText);

  const container = input.parentElement;

  container.prepend(label);
});
