'use strict';

const fields = document.querySelectorAll('.field');
const input = document.querySelectorAll('input');
let count = 0;

fields.forEach(field => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input[count].id);
  label.innerText = input[count].name.split(/(?=[A-Z])/).join(' ');
  field.prepend(label);

  input[count].placeholder
    = input[count].name.charAt(0).toUpperCase()
    + input[count].name.slice(1).split(/(?=[A-Z])/).join(' ');

  count++;
});
