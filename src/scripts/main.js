'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  let inputName = input.name[0].toUpperCase();

  for (let i = 1; i < input.name.length; i++) {
    if (input.name[i] === input.name[i].toUpperCase()) {
      inputName += ' ';
    }

    inputName += input.name[i];
  }

  label.innerHTML = inputName;

  input.before(label);

  input.setAttribute('placeholder', `${inputName}`);
}
