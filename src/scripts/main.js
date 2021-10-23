'use strict';

function capitalize(string) {
  if (string === 'firstName') {
    return 'First name';
  }

  if (string === 'lastName') {
    return 'Last name';
  }

  const capitalizedString = string.charAt(0).toUpperCase()
    + string.slice(1).toLowerCase();

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
