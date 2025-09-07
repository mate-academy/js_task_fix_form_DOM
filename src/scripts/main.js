'use strict';

const inputsForm = document.querySelectorAll('form input');

function capitalize(str) {
  if (!str) {
    return str;
  }

  return str
    .split(/[-_]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

inputsForm.forEach((input, index) => {
  const nameInput = input.name;
  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');

  if (!input.id) {
    input.id = `input-${input.name || 'field'}-${index}`;
  }
  labelElement.htmlFor = input.id;
  labelElement.textContent = capitalize(nameInput);

  input.placeholder = capitalize(nameInput);
  input.parentElement.append(labelElement);
});
