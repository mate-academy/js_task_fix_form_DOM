'use strict';

const formInputs = document.querySelectorAll('form input');

formInputs.forEach((input) => {
  const inputLabel = document.createElement('label');

  inputLabel.classList.add('field-label');
  inputLabel.setAttribute('for', input.id);

  const labelText = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  inputLabel.textContent = labelText;

  input.setAttribute('placeholder', labelText);

  input.parentNode.insertBefore(inputLabel, input);
});
