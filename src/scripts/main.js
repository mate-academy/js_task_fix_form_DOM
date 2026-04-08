'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.insertAdjacentHTML('beforebegin', `
    <label class = "field-label" for = "${input.id}">
      ${input.name}
    </label>
  `);
}
