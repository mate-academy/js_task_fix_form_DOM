'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');
  const inputParentContainer = input.parentElement;

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = splitWords(input.name);
  input.placeholder = splitWords(input.name);

  inputParentContainer.prepend(label);
});

function splitWords(word) {
  let resultWord = formatWord(word);

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      const firstWord = word.slice(0, i).toLowerCase();
      const secondWord = word.slice(i, word.length).toLowerCase();

      const firstFormattedWord = formatWord(firstWord);
      const secondFormattedWord = formatWord(secondWord);

      resultWord = `${firstFormattedWord} ${secondFormattedWord}`;
    }
  }

  return resultWord;
}

function formatWord(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
