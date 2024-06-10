'use strict';

const inputs = document.querySelectorAll('form input');

const upperCaseFirst = (string) => {
  return string
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

inputs.forEach((input) => {
  const newLabel = document.createElement('label');
  let nameWithSpaces = input.name.replace(/([a-z])([A-Z])/g, '$1 $2');

  nameWithSpaces = nameWithSpaces.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');

  newLabel.classList.add('field-label');
  newLabel.setAttribute('for', input.id);
  newLabel.textContent = nameWithSpaces;

  input.setAttribute('placeholder', upperCaseFirst(nameWithSpaces));
  input.parentNode.appendChild(newLabel);
});
