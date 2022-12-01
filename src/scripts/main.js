'use strict';

const inputs = document.querySelectorAll('.field-text');

const transformWords = word => {
  let transformedWord = '';
  let index = null;

  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      index = i;

      break;
    }

    transformedWord += word[i];
  }

  if (index) {
    transformedWord += ` ${word.slice(index)}`;
  }

  return transformedWord.toUpperCase();
};

inputs.forEach(input => {
  const { name: inputName, id } = input;
  const label = document.createElement('label');

  label.textContent = transformWords(inputName);
  label.className = 'field-label';
  label.htmlFor = id;

  input.placeholder = transformWords(inputName);
  input.insertAdjacentElement('beforebegin', label);
});
