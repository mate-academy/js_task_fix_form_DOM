'use strict';

const formElements = [...document.querySelectorAll('form')];
const allInputs = [];
const newLabels = [];

formElements.forEach((form) => {
  allInputs.push(...form.querySelectorAll('input'));
});

allInputs.forEach((input) => {
  const newLabel = document.createElement('label');
  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name');

  newLabel.setAttribute('class', 'field-label');
  newLabel.setAttribute('for', inputId);
  newLabel.textContent = inputName;
  input.setAttribute('placeholder', inputName.toUpperCase());

  const parentElement = input.parentElement;

  parentElement.prepend(newLabel);

  newLabels.push(newLabel);
});
