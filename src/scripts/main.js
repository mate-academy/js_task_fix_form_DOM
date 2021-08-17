'use strict';

const allInputs = document.querySelectorAll('input');

for (const inputField of allInputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', inputField.id);
  label.textContent = inputField.name;

  inputField.setAttribute('placeholder', capitalize(inputField.name));
  inputField.before(label);
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}
