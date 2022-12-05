'use strict';

const inputsMap = [...document.querySelectorAll('.field-text')];

const splitWord = word => {
  const splitedWord = word.replace(/([A-Z]+)/g, ' $1');

  return splitedWord[0].toUpperCase() + splitedWord.slice(1);
};

const createLabel = input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = splitWord(input.name);
  input.placeholder = splitWord(input.name);

  input.before(label);
};

inputsMap.forEach(el => createLabel(el));
