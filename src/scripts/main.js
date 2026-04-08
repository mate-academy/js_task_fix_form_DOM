'use strict';

// write code here
const inputsElements = document.querySelectorAll('input');

for (const inputElement of inputsElements) {
  const labelElement = document.createElement('label');
  const inputName = inputElement.name;

  labelElement.classList.add('field-label');
  labelElement.setAttribute('for', inputElement.id);
  labelElement.textContent = inputName;
  inputElement.placeholder = inputName[0].toUpperCase() + inputName.slice(1);
  inputElement.before(labelElement);
}
