'use strict';

const inputElemrnsts = [ ...document.body.querySelectorAll('input') ];

for (const input of inputElemrnsts) {
  input.insertAdjacentHTML('afterend', `
    <label
      for="${input.id}"
      class="field-label"
    >
      ${capitalizeWord(input.name)}
    </label>
  `);

  input.placeholder = capitalizeWord(input.name);
};

function capitalizeWord(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      return word[0].toUpperCase() + word.slice(1, i) + ` ${word.slice(i)}`;
    }
  }

  return word[0].toUpperCase() + word.slice(1);
}
