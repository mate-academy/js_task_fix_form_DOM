'use strict';

// write code here
const form = document.querySelector('form');
const inputs = Array.from(form.querySelectorAll('input'));

for (const input of inputs) {
  if (!input.id) {
    input.id = input.name + '-id';
  }

  const label = document.createElement('label');

  input.placeholder = capitalize(input.name);
  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = capitalize(input.name);
  input.insertAdjacentElement('beforebegin', label);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
