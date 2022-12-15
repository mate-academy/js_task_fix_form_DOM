'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  input.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${input.id}">
      ${normalize(input.name)}
    </label>
  `);
  input.placeholder = normalize(input.name);
}

function normalize(item) {
  const word = item.split(/(?=[A-Z])/).join(' ');

  return word[0].toUpperCase() + word.slice(1);
}
