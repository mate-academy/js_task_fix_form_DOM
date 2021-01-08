'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const inputName = input.name
    .split('')
    .map(x => x === x.toUpperCase() ? ` ${x}` : x)
    .join('');

  input.insertAdjacentHTML('beforebegin', `
    <label for="${input.id}" class="field-label">
      ${inputName}
    </label>
  `);

  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);
}
