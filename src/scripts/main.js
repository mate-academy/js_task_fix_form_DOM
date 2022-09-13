'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.placeholder = capitalizePhrase(input.name);

  input.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${input.id}">
    ${input.name.toUpperCase()}
    </label>
  `);
}

function capitalizePhrase(word) {
  const result = word.charAt(0).toUpperCase()
    + word.slice(1);

  return result;
}
