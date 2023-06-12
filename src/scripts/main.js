'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const inputLabel = document.createElement('label');
  const inputId = input.id;
  let index = 0;

  for (let i = 1; i < input.name.length; i++) {
    if (input.name[i] === input.name[i].toUpperCase()) {
      index = i;
      break;
    }
  }

  const inputName = input.name.includes('Name')
    ? input.name.slice(0, index).toUpperCase()
    + ' ' + input.name.slice(index).toUpperCase()
    : input.name.toUpperCase();

  inputLabel.classList.add('field-label');
  inputLabel.setAttribute('for', inputId);
  inputLabel.textContent = inputName;

  input.setAttribute('placeholder', inputName);

  input.parentElement.prepend(inputLabel);
});
