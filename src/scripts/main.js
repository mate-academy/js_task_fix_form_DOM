'use strict';

const allInputs = document.querySelectorAll('input');

for (const el of allInputs) {
  el.insertAdjacentHTML('afterend', `
      <label
        class="field-label"
        for=${el.id}
      >
        ${changeString(el.name).toUpperCase()}
      </label>
    `);

  el.placeholder = changeString(el.name);
};

function changeString(string) {
  const changedString = string.split(/(?=[A-Z])/).join(' ');
  const [fisrtLetter, ...rest] = changedString;

  return `${fisrtLetter.toUpperCase()}${rest.join('')}`;
};
