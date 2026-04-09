'use strict';

const formInputs = document.querySelectorAll('form input');

for (const input of formInputs) {
  const fieldId = input.id;
  const fieldName = input.getAttribute('name');

  if (!fieldId || !fieldName) {
    continue;
  }

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', fieldId);
  label.textContent = fieldName;

  const capitalized = fieldName.charAt(0).toUpperCase() + fieldName.slice(1);

  input.setAttribute('placeholder', capitalized);

  const container = input.parentElement;

  container.insertBefore(label, input);
}
