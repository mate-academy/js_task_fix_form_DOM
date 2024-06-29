'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputLabel = document.createElement('label');
  const inputName = input.name.toLowerCase().replace(/name/gi, ' Name');

  inputLabel.className = 'field-label';
  inputLabel.htmlFor = input.id;
  inputLabel.textContent = inputName;

  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);
  input.parentElement.append(inputLabel);
});
