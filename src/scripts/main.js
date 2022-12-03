'use strict';

const inputList = document.querySelectorAll('input');

const getCapitalizedWord = (word) => {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
};

inputList.forEach(input => {
  input.placeholder = getCapitalizedWord(input.name);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();

  input.before(label);
});
