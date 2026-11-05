'use strict';

const formInputs = document.querySelectorAll('form input');

formInputs.forEach((input) => {
  const labelElement = document.createElement('label');
  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name');

  labelElement.setAttribute('class', 'field-label');
  labelElement.setAttribute('for', inputId);
  labelElement.textContent = inputName;

  input.parentElement.appendChild(labelElement);

  input.setAttribute(
    'placeholder',
    inputName.charAt(0).toUpperCase() + inputName.slice(1),
  );
});
