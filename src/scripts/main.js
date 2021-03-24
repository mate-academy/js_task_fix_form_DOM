'use strict';

const inputsList = document.querySelectorAll('input');

function splitWords(string) {
  const secondWordIndex = string.split('').findIndex(
    item => item === item.toUpperCase());
  let splittedWords;

  if (secondWordIndex !== -1) {
    splittedWords = `${string.slice(0, 1)
      .toUpperCase()}`
    + `${string.slice(1, secondWordIndex)}`
    + ` ${string.slice(secondWordIndex)}`;
  } else {
    splittedWords = `${string.slice(0, 1).toUpperCase()}`
    + `${string.slice(1)}`;
  }

  return splittedWords;
}

inputsList.forEach(input => {
  input.insertAdjacentHTML('beforebegin',
    `<label class="field-label" for="${input.id}">`
  + `${splitWords(input.name)}</label>`);
  input.setAttribute('placeholder', splitWords(input.name));
}
);
