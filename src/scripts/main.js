'use strict';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const inputFields = [...document.querySelectorAll('input')];

for (const input of inputFields) {
  const inputLabel = document.createElement('label');

  inputLabel.setAttribute('class', 'field-label');
  inputLabel.setAttribute('for', input.getAttribute('id'));
  inputLabel.textContent = input.getAttribute('name');

  if (inputLabel.textContent.includes('Name')) {
    inputLabel.textContent = inputLabel.textContent.slice(0, -4)
    + ' ' + inputLabel.textContent.slice(-4);
  }

  input.parentNode.append(inputLabel);

  input.setAttribute('placeholder',
    `${capitalizeFirstLetter(inputLabel.textContent.toLocaleLowerCase())}`);
}
