'use strict';

const allInputs = document.querySelectorAll('input');

[...allInputs].forEach(input => {
  const newLabel = document.createElement('label');
  const rightName = divideWords(input.name);

  newLabel.className = 'field-label';
  newLabel.htmlFor = input.id;
  newLabel.textContent = rightName;

  input.placeholder = rightName;
  input.parentElement.append(newLabel);
});

function divideWords(words) {
  const splitedWords = words.replace(/([A-Z])/g, ' $1');

  return splitedWords[0].toUpperCase() + splitedWords.slice(1);
}
