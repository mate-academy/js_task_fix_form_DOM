'use strict';

const inputs = [...document.querySelectorAll('input')];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

inputs.forEach(input => {
  input.insertAdjacentHTML('afterend',
    `<label class="field-label" for="${input.id}">
       ${input.name}
     </label>
  `);

  input.placeholder = capitalize(input.name);
});
