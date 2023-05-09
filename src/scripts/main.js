'use strict';

const inputList = document.querySelectorAll('.field-text');

const getNormalizedWord = (word) => (
  word.charAt(0).toUpperCase() + word.slice(1).replace(/([A-Z])/g, ' $1')
);

inputList.forEach(input => {
  input.placeholder = getNormalizedWord(input.name);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = (getNormalizedWord(input.name)).toUpperCase();

  input.parentElement.append(label);
});
