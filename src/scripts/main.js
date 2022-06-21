'use strict';

const inputList = [...document.querySelectorAll('input')];

const divideWord = (str) => {
  const words = [];
  let index = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      words.push(str.slice(index, i));
      index = i;
    }
  }

  words.push(str.slice(index));

  return words.join(' ');
};

const createLabel = (input) => {
  input.insertAdjacentHTML('beforebegin', `
    <label for=${input.id} class="field-label">
      ${divideWord(input.name)}
    </label>
  `);
};

const createPlaceholder = (input) => {
  let words = divideWord(input.name);

  words = words[0].toUpperCase() + words.slice(1);
  input.placeholder = words;
};

inputList.forEach(createLabel);
inputList.forEach(createPlaceholder);
