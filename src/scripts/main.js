'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.insertAdjacentHTML('afterend', `
    <label class='field-label' for='${input.id}'>${input.name}</label>
  `);
}
