'use strict';

const camelToString = function(camelCase) {
  let string = camelCase.replace(/([A-Z])/g, ' $1');

  string = string[0].toUpperCase() + string.substring(1);

  return string;
};

const fields = document.querySelectorAll('.field');

for (const field of fields) {
  const input = field.querySelector('.field-text');

  field.insertAdjacentHTML('afterbegin', `
    <label
      class="field-label"
      for="${input.id}"
    >
      ${camelToString(input.name)}
    </label>`);

  input.placeholder = camelToString(input.name);
}
