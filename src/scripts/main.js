'use strict';

const inputs = document.querySelectorAll('.field-text');

inputs.forEach(input => {
  input.insertAdjacentHTML('beforebegin', `
    <label
      class="field-label"
      for="${input.id}"
    >
      ${formatString(input.name)}
    </label>
  `);

  input.placeholder = formatString(input.name);
});

function formatString(string) {
  let result = string[0].toUpperCase();

  for (let index = 1; index < string.length; index++) {
    if (string[index] === string[index].toUpperCase()) {
      result += ` ${string[index].toLowerCase()}`;
    } else {
      result += string[index];
    }
  }

  return result;
}
