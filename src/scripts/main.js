'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const inputLabel = document.createElement('label');
  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name');

  inputLabel.classList.add('field-label');
  inputLabel.setAttribute('for', inputId);
  inputLabel.innerHTML = inputName;
  input.setAttribute('placeholder', inputName.toUpperCase());

  input.parentElement.prepend(inputLabel);
});
