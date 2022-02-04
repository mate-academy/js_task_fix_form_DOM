'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  input.insertAdjacentHTML('beforebegin', `
  <label class="field-label" for="${input.id}">
  ${capFirstLetter(input.name)}
  </label>
`);
  input.placeholder = capFirstLetter(input.name);
};

function capFirstLetter(string) {
  return string.charAt(0).toUpperCase()
  + string.slice(1).replace(/([A-Z])/g, ' $1');
};
