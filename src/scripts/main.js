'use strict';

const splitByWords = input => {
  const position = input
    .indexOf([
      ...input]
      .filter(ch =>
        ch >= 'A' && ch <= 'Z')[0]);

  if (position === -1) {
    return input[0].toUpperCase() + input.slice(1);
  }

  const firstWord = input.slice(0, position);
  const firstChToUpperCase = firstWord[0].toUpperCase() + firstWord.slice(1);

  return firstChToUpperCase
      + ' '
      + input.slice(position);
};

const inputs = document
  .querySelectorAll('input');

[
  ...inputs]
  .map(input => {
    const label = document.createElement('label');

    label.setAttribute('class', 'field-label');
    label.setAttribute('for', input.id);
    label.innerText = splitByWords(input.name);

    input
      .parentElement
      .insertAdjacentElement('afterbegin', label);

    input
      .setAttribute('placeholder', splitByWords(input.name));
  });
