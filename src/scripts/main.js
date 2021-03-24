'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.insertAdjacentHTML('beforebegin', `
  <label class="field-label" for="${input.id}">
    ${input.name.replace(/([A-Z][a-z]+)/g, ' $1')}
  </label>
`);

  input.placeholder = input.name.charAt(0).toUpperCase()
    + input.name.slice(1).replace(/([A-Z][a-z]+)/g, ' $1');
}
