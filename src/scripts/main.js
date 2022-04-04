'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const inputName = input.name
    .replace(/([a-z])([A-Z])/, '$1 $2').replace(/\b\w/g, c => c.toUpperCase());

  input.setAttribute('placeholder', inputName);

  input.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${input.id}">
      ${inputName}
    </label>
  `);
}
