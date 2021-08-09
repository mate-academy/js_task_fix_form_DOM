'use strict';

function unCamelCase(string) {
  let newStirng = '';

  for (let letter of string) {
    if (letter === letter.toUpperCase()) {
      letter = ` ${letter}`;
    }
    newStirng += letter;
  }

  return newStirng.charAt(0).toUpperCase() + newStirng.slice(1).toLowerCase();
};

const inputs = document.getElementsByTagName('input');

for (const input of inputs) {
  input.insertAdjacentHTML('beforebegin', `
      <label class="field-label" for="${input.id}">
        ${unCamelCase(input.name)}
      </label>
    `);

  input.placeholder = unCamelCase(input.name);
}
