'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  let inputName = input.getAttribute('name');

  for (let i = 0; i < inputName.length; i++) {
    if (inputName[i] !== inputName[i].toLowerCase()) {
      inputName = inputName.slice(0, i)
        + ' ' + inputName.slice(i).toLowerCase();
    }
  }

  inputName = inputName[0].toUpperCase() + inputName.slice(1);

  input.setAttribute('placeholder', inputName);

  const inputLabel = document.createElement('label');

  inputLabel.classList.add('field-label');
  inputLabel.setAttribute('for', input.getAttribute('id'));
  inputLabel.textContent = inputName.toUpperCase();

  input.parentElement.prepend(inputLabel);
});
