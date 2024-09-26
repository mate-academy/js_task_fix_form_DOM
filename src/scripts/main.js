'use strict';

const inputs = document.querySelectorAll('.field-text');
const divElem = document.querySelectorAll('.field');

for (let i = 0; i < divElem.length; i++) {
  const label = document.createElement('label');
  const capitalizedWord = ifNeededSpace(inputs[i].name);

  inputs[i].placeholder = capitalizedWord;
  label.className = 'field-label';
  label.htmlFor = inputs[i].id;
  label.textContent = capitalizedWord;

  divElem[i].append(label);
}

function ifNeededSpace(word) {
  let formatedWord = word[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      formatedWord += ' ' + word[i];
    } else {
      formatedWord += word[i];
    }
  }

  return formatedWord;
}
