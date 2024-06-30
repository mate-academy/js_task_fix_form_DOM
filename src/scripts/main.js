'use strict';

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function separate(string) {
  return string.replace(/([A-Z])/g, ' $1').trim();
}

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputLabel = document.createElement('label');
  const inputName = capitalize(separate(input.name));

  inputLabel.className = 'field-label';
  inputLabel.htmlFor = input.id;
  inputLabel.textContent = inputName;

  input.placeholder = inputName;
  input.parentElement.append(inputLabel);
});
