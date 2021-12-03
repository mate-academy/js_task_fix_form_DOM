'use strict';

const getAllInputs = document.querySelectorAll('input');

for (const input of getAllInputs) {
  input.insertAdjacentHTML('beforebegin', `
  <label class="field-label" for=${input.id}>
  ${input.name.split(/(?=[A-Z])/).join(' ')}
  </label>
  `);

  input.placeholder = (input.name[0].toUpperCase() + input.name.slice(1))
    .split(/(?=[A-Z])/).join(' ');
}
