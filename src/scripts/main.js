'use strict';

// write code here
const forms = document.querySelectorAll('form');
const inputsHolder = [];

for (const form of forms) {
  const inputs = form.querySelectorAll('input');

  for (const input of inputs) {
    inputsHolder.push(input);
  }
}

// console.log(inputsHolder);

for (const input of inputsHolder) {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.id);

  label.textContent =
    input.name[0].toLocaleUpperCase() +
    input.name.slice(1).replace(/([A-Z])/g, ' $1');
  input.insertAdjacentElement('beforebegin', label);

  const placeholderText =
    input.name[0].toLocaleUpperCase() +
    input.name.slice(1).replace(/([A-Z])/g, ' $1');

  input.placeholder = placeholderText;
}
