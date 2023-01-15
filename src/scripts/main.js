'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const inputName = input.getAttribute('name');

  input.insertAdjacentHTML('afterend', `
    <label class="field-label">
      ${inputName}
    </label>
  `);

  input.placeholder = inputName;
}
