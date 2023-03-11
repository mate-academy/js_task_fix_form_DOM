'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of [...inputs]) {
  input.insertAdjacentHTML('afterend', `
      <label
        class="field-label"
        for=${input.id}
      >
        ${changeString(input.name).toUpperCase()}
      </label>
    `);

  input.placeholder = changeString(input.name);
};

function changeString(string) {
  const sepatedString = string.split(/(?=[A-Z])/).join(' ');
  const [fisrtLetter, ...rest] = sepatedString;

  return `${fisrtLetter.toUpperCase()}${rest.join('')}`;
};
