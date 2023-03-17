'use strict';

const inputs = document.querySelectorAll('input');

function toUpperCaseFirstLetter(word) {
  let str = word[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    str += word[i];
  }

  return str;
}

[...inputs].forEach(input => {
  const labelOfInput = document.createElement('label');

  labelOfInput.htmlFor = input.id;
  labelOfInput.className = 'field-label';
  labelOfInput.textContent = input.name.toUpperCase();
  input.placeholder = toUpperCaseFirstLetter(input.name);

  input.before(labelOfInput);
});
