'use strict';

const inputElements = document.querySelectorAll('.field-text');

for (const inputElement of inputElements) {
  let inputName = inputElement.name;

  if (inputElement.name.indexOf('Name') !== -1) {
    inputName = inputElement.name.replace('Name', '') + ' Name';
  }

  inputElement.setAttribute('placeholder', `${inputName.toUpperCase()}`);

  const labelElement = document.createElement('label');

  labelElement.className = 'field-label';
  labelElement.htmlFor = inputElement.id;
  labelElement.textContent = inputName;

  inputElement.closest('.field').append(labelElement);
}
