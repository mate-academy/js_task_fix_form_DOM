'use strict';

const inputs = document.querySelectorAll('form > div > input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  label.textContent = input.name.includes('Name')
    ? `${input.name.slice(0, -4)} ${input.name.slice(-4)}`
    : input.name;

  input.setAttribute('placeholder', capitalize(input));

  input.parentElement.prepend(label);
}

function capitalize(input) {
  const capitalized = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  if (input.name.includes('Name')) {
    return `${capitalized.slice(0, -4)} ${capitalized.slice(-4)}`;
  }

  return capitalized;
}
