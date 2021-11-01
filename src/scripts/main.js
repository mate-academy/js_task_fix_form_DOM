'use strict';

// write code here

function findTheGapToUpperCase(string) {
  const gap = [...string].findIndex(letter => letter === letter.toUpperCase());
  const firstWord = (string.slice(0, gap)).toUpperCase();
  const secondWord = (string.slice(gap)).toUpperCase();

  const result = `${firstWord} ${secondWord}`;

  if (gap === -1) {
    return string.toUpperCase();
  }

  return result;
}

function findTheGap(string) {
  const gap = [...string].findIndex(letter => letter === letter.toUpperCase());
  let firstWord = string.slice(0, gap);
  const firstLetter = firstWord.slice(0, 1).toUpperCase();

  firstWord = `${firstLetter}${firstWord.slice(1)}`;

  const secondWord = string.slice(gap);

  const result = `${firstWord} ${secondWord}`;

  if (gap === -1) {
    const firstLetterOfInput = string.slice(0, 1).toUpperCase();

    const word = string.slice(1);

    return `${firstLetterOfInput}${word}`;
  }

  return result;
}

[...document.querySelectorAll('input')].map(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  label.textContent = findTheGapToUpperCase(input.name);
  input.parentElement.prepend(label);
  input.placeholder = findTheGap(input.name);
});
