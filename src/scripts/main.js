'use strict';

function capitalize(string) {
  const convertString = string.replace(/([A-Z])/g, ' $1');
  const capitalizedString = convertString.charAt(0).toUpperCase()
    + convertString.slice(1).toLowerCase();

  return capitalizedString;
}

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = `${input.id}`;
  label.textContent = `${input.name}`;
  input.setAttribute('placeholder', `${capitalize(input.name)}`);

  const parentContainer = input.parentElement;

  parentContainer.prepend(label);
}
