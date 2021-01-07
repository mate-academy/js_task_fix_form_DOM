'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  input.placeholder = toUpper(input.name);

  input.insertAdjacentHTML('beforebegin',
    `<label for="${input.id}" class="field-label">
      ${toUpper(input.name)}
    </label>`);
});

function toUpper(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).replace(/Name/, ' Name');
}
