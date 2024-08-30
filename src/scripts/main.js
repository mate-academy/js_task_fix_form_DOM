'use strict';

const fieldElements = document.querySelectorAll('.field');
const inputElements = document.querySelectorAll('input');

fieldElements.forEach((field) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', field.firstElementChild.id);
  label.textContent = field.firstElementChild.name;
  field.prepend(label);
});

inputElements.forEach((input) => {
  input.placeholder = input.name.toUpperCase();
});
