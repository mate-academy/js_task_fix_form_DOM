'use strict';

const inputs = document.querySelectorAll('input');

function capitalize(string) {
  return (string.slice(0, 1).toUpperCase() + string.slice(1))
    .replace(/([A-Z])/g, ' $1').trim();
}

for (const input of inputs) {
  const labelElement = document.createElement('label');

  input.before(labelElement);
  input.setAttribute('placeholder', capitalize(input.name));
  input.setAttribute('autocapitalize', 'words');
  labelElement.classList.add('field-label');
  labelElement.setAttribute('for', `${input.id}`);
  labelElement.textContent = capitalize(input.name);
}
