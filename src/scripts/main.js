'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  let inputName = input.name;

  label.textContent = inputName;

  inputName = inputName[0].toUpperCase() + inputName.substring(1);
  input.placeholder = inputName;

  input.parentElement.append(label);
}
