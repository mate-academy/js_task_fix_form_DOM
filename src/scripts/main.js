'use strict';

const input = document.querySelectorAll('input');
const label = document.createElement('label');

for (let i = 0; i < input.length; i++) {
  const word = input[i].name.split('')[0].toUpperCase()
    + input[i].name.split('').slice(1).map(letter => {
      if (letter === letter.toUpperCase()) {
        return ` ${letter}`;
      }

      return letter;
    }).join('');

  label[i] = document.createElement('label');

  label[i].className = 'field-label';
  label[i].htmlFor = input[i].id;
  label[i].innerText = word;
  input[i].placeholder = word;

  input[i].insertAdjacentElement('beforebegin', label[i]);
}
