'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  input.insertAdjacentHTML('beforebegin', `
  <label class="field-label" for="${input.id}">${input.name}</label>
  `);

  input.placeholder = input.name[0].toUpperCase();

  for (let i = 1; i < input.name.length; i++) {
    if (input.name[i] === input.name[i].toUpperCase()) {
      input.placeholder += ` ${input.name[i]}`;
    } else {
      input.placeholder += input.name[i];
    }
  }
});
