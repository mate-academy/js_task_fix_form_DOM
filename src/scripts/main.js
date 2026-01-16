/* eslint-disable prettier/prettier */
'use strict';

const inputsFromForm = document.querySelectorAll('input');

inputsFromForm.forEach((element) =>
  element.setAttribute(
    'placeholder',
    element.name[0].toUpperCase() + element.name.slice(1),
  ));

inputsFromForm.forEach((element) => {
  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');
  labelElement.setAttribute('for', element.id);
  labelElement.textContent = element.name;

  element.parentNode.appendChild(labelElement);
});
