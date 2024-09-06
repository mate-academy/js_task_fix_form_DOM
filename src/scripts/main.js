'use strict';

function styleFormat(word) {
  function upperToGapLower(match) {
    return ' ' + match.toLowerCase();
  }

  const formatedWord = word.replace(/[A-Z]/g, upperToGapLower);

  return formatedWord[0].toUpperCase() + formatedWord.slice(1);
}

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', input.id);
  label.textContent = styleFormat(input.name);
  input.before(label);

  input.setAttribute('placeholder', styleFormat(input.name));
});
