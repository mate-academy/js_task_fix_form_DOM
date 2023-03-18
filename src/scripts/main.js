'use strict';

const inputs = document.querySelectorAll('input');
const arrOfInputs = [...inputs];

for (const input of arrOfInputs) {
  input.insertAdjacentHTML('beforebegin', `
    <label for="${input.id}" class="field-label">
    ${input.name}
    </label>
  `);

  input.placeholder = input.name;
}
