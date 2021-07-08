'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = `
    <label
      class="field-label"
      for=${input.id}
    >
    ${corectWordStyle(input.name)}
    </label>
  `;

  input.placeholder = corectWordStyle(input.name);
  input.insertAdjacentHTML('beforebegin', label);
};

function corectWordStyle(word) {
  let result = word;

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      word[i].toLowerCase();
      result = `${word.slice(0, i)} ${word.slice(i).toLowerCase()}`;
    }
  }

  return result[0].toUpperCase() + result.slice(1);
};
