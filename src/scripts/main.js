'use strict';

// write code here

let inputArray = document.querySelectorAll('div.field')

let copy = [...inputArray]

copy.map(a => makeFormGood(a))

function makeFormGood(inputArray) {

  let label = document.createElement('label')

  inputArray.append(label)

  let content = capitilazeFirstLetter(splitPhraseByCapitalLetter(inputArray.children[0].name));

  label.className = 'field-label'

  label.textContent = content;

  inputArray.children[0].placeholder = content;
}


function splitPhraseByCapitalLetter(phrase) {

  let total = phrase;
  let text2 = '';
  let text3 = '';

  for (let i = 0; i < phrase.length; i++) {

    if (phrase[i] === phrase[i].toUpperCase()) {
      text2 = phrase.slice(i)
      text3 = phrase.slice(0, i)
      total = text3 + ' ' + text2;
    }
  }

    return total;

}


function capitilazeFirstLetter(word) {
  let temporary = word.slice(0,1);
  let temporary2 = temporary.toUpperCase();
  let temp3 = word;
  let temp4 = temp3.replace(temp3[0], temporary2)

  return temp4
}

