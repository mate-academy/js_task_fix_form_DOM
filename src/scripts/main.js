'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');
  const separatedWords = separateWords(input.name);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = separatedWords;

  input.placeholder = capitalizeFirstLetter(separatedWords);
  input.before(label);
});

function separateWords(word) {
  return word.replace(/([a-z])([A-Z])/g, '$1 $2');
}

function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
