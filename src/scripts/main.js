'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.setAttribute('placeholder', camelToTitleCase(input.name));

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = camelToTitleCase(input.name);

  input.insertAdjacentElement('beforebegin', label);
}

function camelToTitleCase(str) {
  const strWithSpaces = str.replace(/([A-Z])/g, ' $1');
  const titleCase = strWithSpaces[0].toUpperCase() + strWithSpaces.slice(1);

  return titleCase;
}
