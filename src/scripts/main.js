'use strict';

const allInputs = document.querySelectorAll('input.field-text');

allInputs.forEach((input) => {
  const label = document.createElement('label');
  const parentDiv = input.parentElement;

  label.classList.add('field-label');

  const inputName = input.getAttribute('name');
  const inputId = input.id;

  label.textContent = inputName;

  parentDiv.insertBefore(label, input);

  label.setAttribute('for', inputId);
});

allInputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  const placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);

  input.setAttribute('placeholder', placeholder);
});
