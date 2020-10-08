'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const { name, id } = input;
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = id;
  label.textContent = fixedName(name);

  input.placeholder = fixedName(name);

  const parentForInput = input.closest('.field');

  parentForInput.prepend(label);
});

function fixedName(name) {
  const indexOfBigLetter = [...name].findIndex(letter => {
    return letter.toUpperCase() === letter;
  });

  const firstWord = name.substring(0, indexOfBigLetter);
  const secondWord = name.substring(indexOfBigLetter).toLowerCase();

  return firstWord + ' ' + secondWord;
}
