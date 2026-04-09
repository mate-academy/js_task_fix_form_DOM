'use strict';

const formFields = document.querySelectorAll('.field');
const formInputs = document.querySelectorAll('.field-text');

formFields.forEach((field, index) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = formInputs[index].id;
  label.textContent = formInputs[index].name.toUpperCase();
  field.prepend(label);
});

formInputs.forEach(input => {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
});
