'use strict';

const allInputs = document.querySelectorAll('input');
const allFields = document.querySelectorAll('.field');

allFields.forEach((field) => field.insertAdjacentHTML('afterbegin', '<label>'));

const allLabels = document.querySelectorAll('label');

for (let i = 0; i < allInputs.length; i++) {
  allInputs[i].setAttribute('placeholder', `${textFormat(allInputs[i].name)}`);
  allLabels[i].textContent = textFormat(allInputs[i].name);
  allLabels[i].setAttribute('class', 'field-label');
  allLabels[i].setAttribute('for', `${allInputs[i].id}`);
}

function textFormat(word) {
  const splitedWord = word.split(/(?=[A-Z])/);

  for (let i = 0; i < splitedWord.length; i++) {
    splitedWord[i] = splitedWord[i][0].toUpperCase() + splitedWord[i].slice(1);
  }

  return splitedWord.join(' ');
}
