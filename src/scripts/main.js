'use strict';

const inputs = [...document.querySelectorAll('form input')];

inputs.forEach((input) => {
  const labelElement = document.createElement('label');

  labelElement.htmlFor = input.id;
  labelElement.classList.add('field-label');
  labelElement.innerText = input.name;

  input.placeholder = input.name;
  input.parentElement.prepend(labelElement);
});
