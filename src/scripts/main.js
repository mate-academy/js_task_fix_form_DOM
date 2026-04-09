'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');
  const inputName = capitalizeFirstLetter(splitWords(input.name));

  label.className = 'field-label';
  label.textContent = inputName;
  label.htmlFor = input.id;

  input.parentElement.insertBefore(label, input);
  input.placeholder = inputName;
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function splitWords(string) {
  return string.replace(/([A-Z])/g, ' $1');
}
