'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const inputName = input.name.split(/(?=[A-Z])/).join(' ');

  const firstLetter = inputName.charAt(0).toUpperCase();
  const remainingInput = inputName.slice(1);

  input.setAttribute('placeholder', firstLetter + remainingInput);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = inputName.toUpperCase();

  input.before(label);
}
