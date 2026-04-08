'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

inputs.forEach((input, index) => {
  const label = document.createElement('label');
  const inputId = 'input__' + index;
  const title = input.name[0].toUpperCase() + input.name.slice(1);

  input.id = inputId;
  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputId);
  label.textContent = title;

  input.placeholder = title;
  input.parentNode.insertBefore(label, input);
});
