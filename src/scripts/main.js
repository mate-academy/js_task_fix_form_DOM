'use strict';

const forms = document.forms;
const inputs = [];

[...forms].forEach((form) => {
  const formInputs = form.querySelectorAll('input');

  formInputs.forEach((input) => {
    inputs.push(input);
  });
});

const capitalize = (text) =>
  text.slice(0, 1).toUpperCase() + text.slice(1).toLowerCase();

[...inputs].forEach((input) => {
  const labelElement = document.createElement('label');
  const inputId = input.id;
  const inputName = input.name.toUpperCase();
  const placeholder = input.name;

  labelElement.classList.add('field-label');
  labelElement.setAttribute('for', inputId);
  labelElement.textContent = inputName;

  input.placeholder = capitalize(placeholder);
  input.parentElement.append(labelElement);
});
