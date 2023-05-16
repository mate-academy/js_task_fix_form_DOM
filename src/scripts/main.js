'use strict';

const fieldsHTML = document.querySelectorAll('.field');

for (const field of fieldsHTML) {
  field.querySelector('input').setAttribute('placeholder',
    field.querySelector('input').name.charAt(0).toUpperCase()
    + field.querySelector('input').name.slice(1).toLowerCase());

  const label = document.createElement('label');

  label.setAttribute('for', field.querySelector('input').id);
  label.innerText = field.querySelector('input').name.toUpperCase();
  field.prepend(label);
}
