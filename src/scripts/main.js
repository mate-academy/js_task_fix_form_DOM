'use strict';

const capitalize = (text) => {
  return text[0].toUpperCase() + text.slice(1);
};

const inputs = document.querySelectorAll('form input');

inputs.forEach(input => {
  input.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${input.id}">
      ${input.name}
    </label>
  `);

  input.placeholder = capitalize(input.name);
});
