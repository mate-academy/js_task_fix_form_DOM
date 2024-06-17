'use strict';

const inputsCollection = document.querySelectorAll('input');

inputsCollection.forEach((input) => {
  const inputName = input.getAttribute('name');
  const inputId = input.getAttribute('id');
  const capitalizedInputName =
    inputName.charAt(0).toUpperCase() + inputName.slice(1);

  const placeholder = capitalizedInputName.includes('Name')
    ? capitalizedInputName.replace('Name', ' Name')
    : capitalizedInputName;

  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputId);
  label.textContent = placeholder;

  input.setAttribute('placeholder', placeholder);
  input.parentNode.appendChild(label);
});
