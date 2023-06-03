'use strict';

const allInputs = document.querySelectorAll('.field-text');

for (const input of allInputs) {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.insertAdjacentHTML('beforebegin', `
    <label class='field-label' for='${input.id}'>
      ${input.name}
    </label>
  `);
}
