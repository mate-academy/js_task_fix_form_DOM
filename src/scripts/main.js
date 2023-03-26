'use strict';

const inputElements = document.querySelectorAll('input');

for (const inputElement of inputElements) {
  const labelElement = document.createElement('label');

  labelElement.htmlFor = inputElement.id;
  labelElement.className = 'field-label';

  const fieldDescription = inputElement.name
    .replace(/[A-Z]/g, (match) => ' ' + match)
    .toLowerCase();

  labelElement.textContent = fieldDescription;
  inputElement.before(labelElement);

  inputElement.placeholder = fieldDescription[0].toUpperCase()
    + fieldDescription.slice(1);
}
