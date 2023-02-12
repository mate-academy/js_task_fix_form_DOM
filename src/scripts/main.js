'use strict';

const form = document.querySelector('form');
const inputs = form.querySelectorAll('input');

function capitalize(someText) {
  someText[0].toUpperCase();

  return someText;
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-class';
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.placeholder = capitalize(input.name);
  input.parentElement.appendChild(label);
}
