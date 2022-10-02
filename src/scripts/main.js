'use strict';

const inputs = [...document.querySelectorAll('input')];

function textFormatting(word) {
  for (const letter of word) {
    if (letter.toLowerCase() !== letter) {
      const indexLetter = word.indexOf(letter);

      return word.charAt(0).toUpperCase()
      + word.slice(1, indexLetter) + ' '
      + word.slice(indexLetter).toLowerCase();
    }
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}

inputs.map(input => {
  input.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${input.id}">
      ${textFormatting(input.name)}
    </label>`);
  input.placeholder = textFormatting(input.name);
});
