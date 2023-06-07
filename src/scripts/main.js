'use strict';

const parentElem = document.querySelectorAll('.field');
const fieldLabel = document.createElement('label');
const input = document.querySelectorAll('input');

[...input].forEach(elem => {
  elem.placeholder = separateWord(elem.name).toUpperCase();
});

fieldLabel.className = 'field-label';

[...parentElem].forEach(elem => {
  elem.append(fieldLabel.cloneNode(true));
});

[...parentElem].forEach(elem => {
  elem.lastElementChild.htmlFor = elem.firstElementChild.id;
  elem.lastElementChild.textContent = separateWord(elem.firstElementChild.name);
});

function separateWord(word) {
  const upper = word.slice(0, 1).toUpperCase();

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      return upper + word.slice(1, [i]) + ' ' + word.slice(i, word.length);
    }
  }

  return upper + word.slice(1, word.length);
}
