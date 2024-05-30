'use strict';

const allInputs = [...document.querySelectorAll('input')];

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.htmlFor = input.getAttribute('id');

  label.textContent = addSpaceToCamelCase(input.getAttribute('name'));

  input.before(label);

  input.setAttribute('placeholder', formatString(input.name));
});

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function addSpaceToCamelCase(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2');
}

function formatString(string) {
  const stringWithSpaces = addSpaceToCamelCase(string);

  return capitalizeFirstLetter(stringWithSpaces);
}
