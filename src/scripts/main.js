'use strict';

const arrInputs = document.querySelectorAll('input');

function splitWord(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      const newWord = `${word.substring(0, i)} ${word.substring(i)}`;
      const resultWord = `${newWord[0].toUpperCase()}${newWord.substring(1)}`;

      return resultWord;
    }
  }

  return `${word[0].toUpperCase()}${word.substring(1)}`;
}

for (let i = 0; i < arrInputs.length; i++) {
  const item = document.createElement('label');

  item.textContent = splitWord(arrInputs[i].name);
  item.setAttribute('for', `${arrInputs[i].id}`);
  item.setAttribute('class', 'field-label');
  arrInputs[i].parentElement.append(item);
  arrInputs[i].setAttribute('placeholder', `${splitWord(arrInputs[i].name)}`);
}
