'use strict';

const forms = document.querySelector('form');
const inputs = forms.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const inputId = input.id;

  label.setAttribute('for', inputId);

  label.textContent = input.name;

  input.placeholder = input.name
    .replace(/_/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase());

  input.parentNode.insertBefore(label, input);
});

const secondForm = document.querySelector('form:nth-of-type(2)');
const secondInputs = secondForm.querySelectorAll('input');

secondInputs.forEach((item) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const inputId = item.id;

  label.setAttribute('for', inputId);

  label.textContent = item.name;

  item.placeholder = item.name
    .replace(/_/g, ' ')
    .replace(/^\w/, (c) => c.toUpperCase());

  item.parentNode.insertBefore(label, item);
});
