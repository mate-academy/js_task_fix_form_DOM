'use strict';

const inputs = document.querySelectorAll('.field-text');

const capitalize = (str) => {
  return str.slice(0, 1).toUpperCase()
  + str.slice(1).replace(/([a-z])([A-Z])/, '$1 $2');
};

[...inputs].forEach(input => {
  input.placeholder = capitalize(input.name);

  input.insertAdjacentHTML('beforebegin', `
    <label class='field-label' for='${input.id}'>
      ${capitalize(input.name)}
    </label>
  `);
});
