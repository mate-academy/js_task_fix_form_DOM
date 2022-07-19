'use strict';

const allInputs = document.querySelectorAll('input');

allInputs.forEach(input => {
  const label = document.createElement('label');
  const inputName = input.name;

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = inputName;

  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);
  input.insertAdjacentElement('beforebegin', label);
});
