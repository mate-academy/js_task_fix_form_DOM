'use strict';

const inputElements = document.querySelectorAll('input')

for (const inputElement of inputElements) {
  const name = inputElement.name.charAt(0).toUpperCase() + inputElement.name.slice(1);
  const labelElement = document.createElement('label')

  labelElement.classList.add('field-label')
  labelElement.htmlFor = inputElement.id;
  labelElement.textContent = name.toLocaleUpperCase();

  inputElement.insertAdjacentElement('beforebegin', labelElement);
  inputElement.placeholder = name;
}
