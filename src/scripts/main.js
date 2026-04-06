/* eslint-disable no-console */
'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const label = document.createElement('label');
  const inputParent = input.closest('div');
  const inputName = input.name.split(/(?=[A-Z])/).join(' ');
  const inputPlaceholder =
    inputName.charAt(0).toUpperCase() + inputName.slice(1);

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = inputName.toUpperCase();

  input.placeholder = inputPlaceholder;

  inputParent.append(label);
}
