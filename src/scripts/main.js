/* eslint no-console: [,{ allow: ["warn", "log", "error"] }] */
'use strict';

function capitalizeFirstLetter(word) {
  if (typeof word !== 'string' || word.length === 0) {
    return word; // Handle empty strings or non-string inputs
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}

const allInputs = document.querySelectorAll('input');

console.log(allInputs);

allInputs.forEach((input) => {
  const inputId = input.getAttribute('id');
  const inputName = capitalizeFirstLetter(input.getAttribute('name'));
  const label = document.createElement('label');

  label.setAttribute('for', inputId);
  label.setAttribute('class', 'field-label');
  label.textContent = inputName;
  input.setAttribute('placeholder', inputName);
  input.before(label);
});
