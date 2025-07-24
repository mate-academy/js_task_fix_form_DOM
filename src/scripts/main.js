'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');

  if (!inputName) {
    return;
  }

  const inputId = input.getAttribute('id');

  const inputLabel = document.createElement('label');

  inputLabel.classList.add('field-label');
  inputLabel.setAttribute('name', inputName);
  inputLabel.setAttribute('id', `${inputId}-lable`);
  inputLabel.setAttribute('for', inputId);
  inputLabel.textContent = inputName;

  input.parentElement.insertBefore(inputLabel, input);

  input.setAttribute('placeholder', `Введите ${inputName}`);
});
