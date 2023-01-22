'use strict';

// write code here

const docArray = document.querySelectorAll('div.field');

const copy = [...docArray];

copy.map(a => makeFormGood(a));

function makeFormGood(inputArray) {
  const label = document.createElement('label');

  inputArray.append(label);

  const content
  = capitilazeFirstLetter(splitPhraseByCapitalLetter(
    inputArray.children[0].name));

  label.className = 'field-label';

  label.textContent = content;

  inputArray.children[0].placeholder = content;
}

function splitPhraseByCapitalLetter(phrase) {
  let total = phrase;
  let text2 = '';
  let text3 = '';

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] === phrase[i].toUpperCase()) {
      text2 = phrase.slice(i);
      text3 = phrase.slice(0, i);
      total = text3 + ' ' + text2;
    }
  }

  return total;
}

function capitilazeFirstLetter(word) {
  const temporary = word.slice(0, 1);
  const temporary2 = temporary.toUpperCase();
  const temp3 = word;
  const temp4 = temp3.replace(temp3[0], temporary2);

  return temp4;
}
