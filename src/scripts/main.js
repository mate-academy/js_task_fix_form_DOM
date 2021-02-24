'use strict';

const input = document.querySelectorAll('input');

const label = document.createElement('label');

function capitalize(string) {
  const inputTextWord = (word) => (
    word.substring(0, 1).toUpperCase() + word.substring(1)
  );
  const firstLetterToUpperCase = string.split(' ').map(inputTextWord).join(' ');

  const inputTextLetter = (letter) => (
    letter === letter.toUpperCase() ? ' ' + letter : letter
  );
  const splitWords
    = firstLetterToUpperCase.split('').map(inputTextLetter).join('');

  return splitWords;
}

for (let i = 0; i < input.length; i++) {
  label[i] = document.createElement('label');
  label[i].className = 'field-label';
  label[i].htmlFor = input[i].id;
  label[i].innerText = capitalize(input[i].name);
  input[i].placeholder = capitalize(input[i].name);

  input[i].insertAdjacentElement('beforebegin', label[i]);
}
