'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  let inputName = input.name.split(/(?=[A-Z])/).join(' ');

  inputName = inputName[0].toUpperCase() + inputName.slice(1);

  input.parentElement.insertAdjacentHTML('afterbegin', `
  <label class="field-label" for="${input.id}">
    ${inputName}
  </label>
  `);

  input.placeholder = inputName;
};
