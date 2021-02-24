'use strict';

const input = document.querySelectorAll('input');
const label = document.createElement('label');

function converterToSeparateWordWithFirstLetterToUpperCase(wordsToConvert) {
  const wordWithoutFirstLetter
    = wordsToConvert.split('').slice(1).map(letter => {
      if (letter === letter.toUpperCase()) {
        return ` ${letter}`;
      }

      return letter;
    });

  const firstLetter = wordsToConvert[0].toUpperCase();

  return firstLetter + wordWithoutFirstLetter.join('');
}

for (let i = 0; i < input.length; i++) {
  const word = converterToSeparateWordWithFirstLetterToUpperCase(input[i].name);

  label[i] = document.createElement('label');

  label[i].className = 'field-label';
  label[i].htmlFor = input[i].id;
  input[i].placeholder = word;
  label[i].innerText = word;

  input[i].insertAdjacentElement('beforebegin', label[i]);
}
