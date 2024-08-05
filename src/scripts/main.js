'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const inputName = input.getAttribute('name');
  const inputId = input.getAttribute('id');

  const putText = convertCamel(inputName);

  label.textContent = putText;
  label.htmlFor = inputId;
  label.classList.add('field-label');
  input.setAttribute('placeholder', putText);
  input.before(label);
}

function capitalizeWord(word) {
  return word ? word[0].toUpperCase() + word.slice(1) : '';
}

function convertCamel(camelWord) {
  const lowerWord = camelWord.toLowerCase();
  const arrayIndexs = [0];
  let result = '';

  for (let i = 0; i < camelWord.length; i++) {
    if (camelWord[i] !== lowerWord[i]) {
      arrayIndexs.push(i);
    }
  }

  arrayIndexs.push(camelWord.length);

  for (let k = 0; k < arrayIndexs.length - 1; k++) {
    result += lowerWord.slice(arrayIndexs[k], arrayIndexs[k + 1]) + ' ';
  }

  const finalResult = result.trim();

  return capitalizeWord(finalResult);
}
