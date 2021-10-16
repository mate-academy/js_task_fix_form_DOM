'use strict';

function capitalize(string) {
  const capitalizeString = string.charAt(0).toUpperCase()
  + string.slice(1).toLowerCase();

  return capitalizeString;
}

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = `${input.id}`;
  label.textContent = `${input.name}`;
  input.setAttribute('placeholder', `${capitalize(input.name)}`);

  const parentContainer = input.parentElement;

  parentContainer.prepend(label);
}
