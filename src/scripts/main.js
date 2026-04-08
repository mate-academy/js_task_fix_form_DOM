'use strict';

const fieldsHTML = document.querySelectorAll('.field');

for (const field of fieldsHTML) {
  const inputField = field.querySelector('input');

  inputField.setAttribute('placeholder',
    inputField.name.charAt(0).toUpperCase()
    + inputField.name.slice(1).toLowerCase());

  const label = document.createElement('label');

  label.setAttribute('for', inputField.id);

  label.innerText = inputField.name.replace(/([A-Z])/g, ' $1');
  label.className = 'field-label';
  field.prepend(label);
}
