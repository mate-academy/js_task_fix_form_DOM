'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const labelForInput = document.createElement('label');

  labelForInput.className = 'field-label';
  labelForInput.htmlFor = input.id;

  let value = input.name;

  for (let i = 0; i < input.name.length; i++) {
    if (input.name[i] === input.name[i].toUpperCase()) {
      value = input.name.split(input.name[i]).join(` ${input.name[i]}`);
    }
  }

  labelForInput.textContent = value;

  input.placeholder = input.name;

  input.parentElement.append(labelForInput);
}
