'use strict';

const inputs = document.querySelectorAll('.field-text');

const formatingWord = (word) => {
  let newWord = '';

  for (const letter of word) {
    if (letter === letter.toUpperCase()) {
      newWord += ' ';
    }

    newWord += letter;
  }

  return newWord.charAt(0).toUpperCase() + newWord.slice(1);
};

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = formatingWord(input.name);
  input.placeholder = formatingWord(input.name);

  input.parentElement.append(label);
}
