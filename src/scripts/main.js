'use strict';

const inputsArray = document.querySelectorAll('input');

for (const input of inputsArray) {
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
