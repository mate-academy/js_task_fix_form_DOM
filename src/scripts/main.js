'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const editWord = input.name.split('').map(el => {
    if (el === el.toUpperCase()) {
      return ' ' + el;
    } else {
      return el;
    }
  });

  editWord[0] = editWord[0].toUpperCase();

  input.placeholder = editWord.join('');

  input.insertAdjacentHTML('afterend', `
    <label class='field-label' for='${input.id}'>${input.placeholder}</label>
  `);
}
