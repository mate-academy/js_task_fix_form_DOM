'use strict';

const inputs = [...document.querySelectorAll('input')];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

inputs.map((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.insertAdjacentElement('beforebegin', label);
  input.placeholder = capitalize(input.name);
});
