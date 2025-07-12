'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const fieldName = input.name;

  if (!fieldName) {
    return;
  }

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

  input.placeholder = label.textContent;

  input.parentElement.insertBefore(label, input);
});
