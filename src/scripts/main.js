/* eslint-disable prettier/prettier */
'use strict';

const form = document.querySelectorAll('form');
const inputsFromForm = [];

form.forEach((element) => {
  const inputs = element.querySelectorAll('input');

  inputs.forEach((input) => inputsFromForm.push(input));
});

inputsFromForm.forEach((element) => {
  element.setAttribute(
    'placeholder',
    element.name[0].toUpperCase() + element.name.slice(1),
  );

  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');
  labelElement.setAttribute('for', element.id);
  labelElement.textContent = element.name.toUpperCase();

  element.parentNode.appendChild(labelElement);
});
