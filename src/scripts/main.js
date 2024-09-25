'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  const separatedWords = separateWords(input.name);

  label.textContent = separatedWords;

  input.placeholder =
    separatedWords.charAt(0).toUpperCase() + separatedWords.slice(1);

  input.before(label);
});

function separateWords(word) {
  let result = '';

  for (let i = 0; i < word.length; i++) {
    if (i > 0 && word[i] === word[i].toUpperCase()) {
      result += ' ';
    }
    result += word[i];
  }

  return result;
}
