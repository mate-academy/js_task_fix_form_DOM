'use strict';

const inputElements = document.querySelectorAll('.field-text');

for (const inputElement of inputElements) {
  let inputName = inputElement.name[0].toUpperCase()
    + inputElement.name.slice(1);

  if (inputElement.name.indexOf('Name') !== -1) {
    inputName = inputName.replace('Name', '') + ' Name';
  }

  inputElement.setAttribute('placeholder', `${inputName}`);

  const labelElement = document.createElement('label');

  labelElement.className = 'field-label';
  labelElement.htmlFor = inputElement.id;
  labelElement.textContent = inputName;

  inputElement.closest('.field').append(labelElement);
}
