'use strict';

const fieldCollection = document.querySelectorAll('.field');

function capitalize(string) {
  let newString = string;

  if (string.includes('N')) {
    newString = string.split('N').join(' N');
  }

  return newString.charAt(0).toUpperCase() + newString.slice(1);
};

for (const field of fieldCollection) {
  const label = document.createElement('label');
  const input = field.lastElementChild;
  const inputId = input.getAttribute('id');
  const inputName = input.getAttribute('name');

  label.className = 'field-label';
  label.textContent = inputName;
  label.setAttribute('for', `${inputId}`);
  field.prepend(label);
  input.setAttribute('placeholder', `${capitalize(inputName)}`);
}
