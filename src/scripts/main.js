'use strict';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const inputElem = document.createElement('label');

  inputElem.setAttribute('class', 'field-label');
  inputElem.setAttribute('for', input.getAttribute('id'));
  inputElem.textContent = input.getAttribute('name');

  input.setAttribute('placeholder',
    `${capitalizeFirstLetter(inputElem.textContent.toLowerCase())}`);

  input.parentNode.append(inputElem);
}
