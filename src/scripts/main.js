'use strict';

const inputElements = document.querySelectorAll('input');

for (let i = 0; i < inputElements.length; i++) {
  const labelElement = document.createElement('label');
  const splitString = inputElements[i].name.split(/(?=[A-Z])/).join(' ');

  labelElement.className = 'field-label';
  labelElement.htmlFor = inputElements[i].id;
  labelElement.textContent = splitString;

  inputElements[i].placeholder
    = splitString[0].toUpperCase()
    + splitString.slice(1);

  const parentElement = inputElements[i].parentElement;

  parentElement.append(labelElement);
}
