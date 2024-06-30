'use strict';

function capitalizeWord(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function separateWords(string) {
  return string.replace(/([A-Z])/g, ' $1').trim();
}

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputLabel = document.createElement('label');
  const inputName = capitalizeWord(separateWords(input.name));

  inputLabel.className = 'field-label';
  inputLabel.htmlFor = input.id;
  inputLabel.textContent = inputName;

  input.placeholder = inputName;
  input.parentElement.append(inputLabel);
});
