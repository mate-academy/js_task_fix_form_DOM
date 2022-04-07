'use strict';

const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
  input.insertAdjacentHTML('beforebegin', `
    <label for = "${input.id}" class = "field-label">
      ${input.name}
    </label>
  `);
  input.placeholder = input.name.toUpperCase();
}
