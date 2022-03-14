'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const inputName = input.name;

  input.insertAdjacentHTML('beforebegin', `
    <label class='field-label' for='${input.id}'>
      ${inputName}
    </label>
  `);

  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);
}
