'use strict';

const inputElements = document.querySelectorAll('input');

for (let i = 0; i < inputElements.length; i++) {
  const inputName = inputElements[i].getAttribute('name');
  const labelElement = document.createElement('label');
  let changedInputName = '';

  for (let j = 0; j < inputName.length; j++) {
    if (inputName[j] === inputName[j].toUpperCase()) {
      changedInputName += ' ';
    }
    changedInputName += inputName[j];
  }

  labelElement.setAttribute('for', inputElements[i].getAttribute('id'));
  labelElement.setAttribute('class', 'field-label');
  labelElement.textContent = changedInputName;

  inputElements[i].setAttribute(
    'placeholder', changedInputName.charAt(0).toUpperCase()
    + changedInputName.slice(1));

  inputElements[i].parentNode.appendChild(labelElement);
}
