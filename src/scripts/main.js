'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach((input) => {
  const { name: fieldName, id } = input;

  const formattedFieldName = fieldName[0].toUpperCase() + fieldName.slice(1);

  const spacedFieldName = formattedFieldName.replace(/([A-Z])/g, ' $1');

  const label = document.createElement('label');

  label.textContent = spacedFieldName;
  label.htmlFor = id;
  label.className = 'field-label';

  input.insertAdjacentElement('beforebegin', label);

  input.placeholder = spacedFieldName;
});
