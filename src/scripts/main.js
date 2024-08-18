'use strict';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function splitCamelCase(str) {
  return str.replace(/([a-z])([A-Z])/g, '$1 $2');
}

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  const id = input.getAttribute('id');
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', id);
  label.innerText = splitCamelCase(inputName);

  input.setAttribute('placeholder', capitalize(inputName));
  input.parentElement.append(label);
});
