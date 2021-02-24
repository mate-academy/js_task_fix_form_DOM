'use strict';

const input = document.querySelectorAll('input');
const label = document.createElement('label');

for (let i = 0; i < input.length; i++) {
  const inputName = input[i].name.split('');
  const firstLetter = inputName[0].toUpperCase();

  const separatedWord = inputName.slice(1).map(letter => {
    if (letter === letter.toUpperCase()) {
      return ` ${letter}`;
    }

    return letter;
  });

  const word = firstLetter + separatedWord.join('');

  label[i] = document.createElement('label');

  label[i].className = 'field-label';
  label[i].htmlFor = input[i].id;
  input[i].placeholder = word;
  label[i].innerText = word;

  input[i].insertAdjacentElement('beforebegin', label[i]);
}
