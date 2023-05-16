'use strict';

const fieldsHTML = document.querySelectorAll('.field');

for (const field of fieldsHTML) {
  const fieldName = field.querySelector('input').name;

  field.querySelector('input').setAttribute('placeholder',
    fieldName.charAt(0).toUpperCase()
    + field.querySelector('input').name.slice(1).toLowerCase());

  const label = document.createElement('label');

  label.setAttribute('for', field.querySelector('input').id);

  label.innerText = fieldName.charAt(0).toUpperCase()
    + fieldName.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase();
  field.prepend(label);
}
