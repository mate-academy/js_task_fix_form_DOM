'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  const inputName = splitWord(input.name);

  label.textContent = inputName;

  input.parentNode.append(label);

  label.className = 'field-label';
  label.htmlFor = inputName;

  input.placeholder = inputName.substring(0, 1).toUpperCase()
    + inputName.substring(1);
}

function splitWord(word) {
  let cuttedWord = '';

  word.split('').forEach(letter => {
    if (letter.charCodeAt() < 91) {
      cuttedWord += ` `;
    }
    cuttedWord += letter;
  });

  return cuttedWord;
}
