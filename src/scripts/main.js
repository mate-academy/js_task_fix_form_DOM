/* eslint-disable prettier/prettier */
'use strict';

const inputsFromForm = document.querySelectorAll('form input');

inputsFromForm.forEach((element) => {
  element.setAttribute(
    'placeholder',
    capitalize(element),
  );

  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');
  labelElement.setAttribute('for', element.id);

  labelElement.textContent =
    capitalize(element);

  element.parentNode.appendChild(labelElement);
});

function capitalize(element) {
  return element.name[0].toUpperCase() + element.name.slice(1);
}
