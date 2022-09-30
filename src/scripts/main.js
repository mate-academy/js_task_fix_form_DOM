'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const inputId = input.id;
  const inputName = input.name;

  const indexOfName = inputName.indexOf('Name');

  const formatPlaceholder
    = indexOfName !== -1
      ? inputName[0].toUpperCase() + inputName.slice(1, indexOfName)
      + ' ' + inputName.slice(indexOfName)
      : inputName[0].toUpperCase() + inputName.slice(1);

  input.placeholder = formatPlaceholder;

  const createLabel = document.createElement('label');

  createLabel.classList.add('field-label');
  createLabel.htmlFor = inputId;
  createLabel.textContent = formatPlaceholder;

  input.insertAdjacentElement('beforebegin', createLabel);
});
