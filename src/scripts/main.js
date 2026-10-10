'use strict';

const fieldsText = document.querySelectorAll('form input');

fieldsText.forEach((field) => {
  const rawFieldName = field.getAttribute('name');
  const fieldName = rawFieldName[0].toUpperCase() + rawFieldName.slice(1);
  const fieldId = field.getAttribute('id');
  const label = document.createElement('label');

  field.placeholder = fieldName;

  label.for = fieldId;
  label.textContent = rawFieldName;
  label.className = 'field-label';

  field.parentElement.appendChild(label);
});
