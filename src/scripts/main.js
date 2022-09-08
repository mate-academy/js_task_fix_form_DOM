'use strict';

const inputs = document.querySelectorAll('input');

const capitalize = str => {
  return str[0].toUpperCase() + str.slice(1).replace(/Name/, ' Name');
};

inputs.forEach(input => {
  input.placeholder = capitalize(input.name);

  input.insertAdjacentHTML('beforebegin',
    `<label for="${input.id}" class="field-label">
      ${capitalize(input.name)}
    </label>`);
});
