'use strict';

const INPUT_FIRST_NAME = 'firstName';
const INPUT_LAST_NAME = 'lastName';

const formInputs = document.querySelectorAll('.field-text');

formInputs.forEach((formInput) => {
  const label = document.createElement('label');
  const inputId = formInput.getAttribute('id');
  const inputName = formInput.getAttribute('name');

  let placeholderText = inputName.charAt(0).toUpperCase() + inputName.slice(1);
  let labelText = '';

  switch (inputName) {
    case INPUT_FIRST_NAME:
      placeholderText = 'First Name';
      labelText = 'First Name';
      break;
    case INPUT_LAST_NAME:
      placeholderText = 'Last Name';
      labelText = 'Last Name';
      break;
    default:
      labelText = inputName;
  }

  label.classList.add('field-label');

  label.setAttribute('for', inputId);
  formInput.setAttribute('placeholder', placeholderText);

  label.textContent = labelText;

  formInput.parentNode.insertBefore(label, formInput);
});
