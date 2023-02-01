'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  input.parentElement.append(label);
  label.textContent = input.name.toUpperCase();

  label.setAttribute('for', input.id);
  input.setAttribute('placeholder', getCapitalize(input.name));
}

function getCapitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
