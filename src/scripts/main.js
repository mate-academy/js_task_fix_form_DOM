'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const inputLabel = document.createElement('label');
  const inputId = input.id;
  const inputName = input.name;

  inputLabel.classList.add('field-label');
  inputLabel.setAttribute('for', inputId);
  inputLabel.textContent = inputName;

  if (inputName.includes('Name')) {
    let index = 0;

    for (let i = 1; i < inputName.length; i++) {
      if (inputName[i] === inputName[i].toUpperCase()) {
        index = i;
        break;
      }
    }

    input.setAttribute('placeholder', inputName.slice(0, index).toUpperCase()
    + ' ' + inputName.slice(index).toUpperCase());
  } else {
    input.setAttribute('placeholder', inputName.toUpperCase());
  }

  input.parentElement.prepend(inputLabel);
});
