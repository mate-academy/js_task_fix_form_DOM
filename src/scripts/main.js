'use strict';

const searchFields = document.querySelectorAll('form input');

for (const field of searchFields) {
  const placeholderName = field.name;
  // console.log(placeholderName)
  let inputId = field.id;

  const uPlaceholderName =
    placeholderName.charAt(0).toUpperCase() + placeholderName.slice(1);

  // console.log(uPlaceholderName)
  field.placeholder = uPlaceholderName;

  const newLabel = document.createElement('label');

  field.before(newLabel);
  newLabel.textContent = uPlaceholderName;
  newLabel.classList.add('field-label');

  if (!inputId) {
    inputId = field.name + 'suffix';
    field.id = inputId;
  }

  newLabel.setAttribute('for', inputId);
}
