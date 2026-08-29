'use strict';

const formElements = document.querySelectorAll('form');

formElements.forEach((form) => {
  const inputElements = form.querySelectorAll('input');

  inputElements.forEach((input) => {
    const labelElement = document.createElement('label');

    labelElement.classList.add('field-label');
    labelElement.htmlFor = input.id;
    labelElement.textContent = input.name;

    input.placeholder = input.name.toUpperCase();

    input.parentElement.append(labelElement);
  });
});
