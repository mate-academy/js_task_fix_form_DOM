'use strict';

// write code here
const fields = document.querySelectorAll('.field');
const inputs = document.querySelectorAll('input');

for (let i = 0; i < fields.length; i++) {
  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');

  const addSpace = inputs[i].name.replace(/([A-Z])/g, ' $1').trim();

  labelElement.textContent = addSpace;
  labelElement.setAttribute('for', `${inputs[i].id}`);
  fields[i].appendChild(labelElement);

  const placeholderName = addSpace;
  const placeholderText =
    placeholderName.charAt(0).toUpperCase() + placeholderName.slice(1);

  inputs[i].setAttribute('placeholder', placeholderText);
}
