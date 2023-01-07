'use strict';

const allInputs = document.querySelectorAll('input');

[...allInputs].forEach(input => {
  const newLabel = document.createElement('label');
  const rightName = divideWords(input.name);

  newLabel.className = 'field-label';
  newLabel.htmlFor = input.id;
  newLabel.textContent = rightName;

  input.placeholder = rightName[0].toUpperCase() + rightName.slice(1);
  input.parentElement.append(newLabel);
});

function divideWords(words) {
  return words.split('').reduce((result, letter, index) => {
    if (index && letter === letter.toUpperCase()) {
      return result + ` ${letter}`;
    }

    return result + letter;
  }, '');
}
