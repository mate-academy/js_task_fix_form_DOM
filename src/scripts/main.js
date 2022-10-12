'use strict';

const fields = document.querySelectorAll('.field');
const input = document.querySelectorAll('input');

fields.forEach((field, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input[index].id);
  label.innerText = input[index].name.split(/(?=[A-Z])/).join(' ');
  field.prepend(label);

  input[index].placeholder
    = input[index].name.charAt(0).toUpperCase()
    + input[index].name.slice(1).split(/(?=[A-Z])/).join(' ');
});
