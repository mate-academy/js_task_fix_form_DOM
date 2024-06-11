'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const { id, name: inputName } = input;
  const label = document.createElement('label');

  input.parentElement.appendChild(label);
  label.classList.add('field-label');
  label.textContent = inputName;
  label.setAttribute('for', `${id}`);
  input.setAttribute('placeholder', `${inputName.toLowerCase()}`);
});
