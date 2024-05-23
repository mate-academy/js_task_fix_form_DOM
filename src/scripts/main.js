'use strict';

// write code here
const inputs = document.querySelectorAll('input');

function toCapitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

inputs.forEach((input) => {
  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');
  labelElement.setAttribute('for', input.id);
  labelElement.textContent = input.getAttribute('name');
  input.parentElement.insertBefore(labelElement, input);

  input.setAttribute('placeholder', toCapitalize(input.getAttribute('name')));
});
