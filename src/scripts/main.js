'use strict';

// write code here
function getSeparatedWords(placeholder) {
  let wordPlaceholder = placeholder[0].toUpperCase();

  for (let i = 1; i < placeholder.length; i++) {
    const letter = placeholder[i];

    if (letter === letter.toUpperCase()) {
      wordPlaceholder += ' ';
      wordPlaceholder += letter.toLowerCase();
    } else {
      wordPlaceholder += letter;
    }
  }

  return wordPlaceholder;
}

const inputs = [...document.getElementsByClassName('field-text')];

inputs.forEach((input) => {
  const idInput = input.getAttribute('id');
  const nameInput = input.getAttribute('name');
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', `${idInput}`);
  label.textContent = getSeparatedWords(nameInput);

  const div = input.parentNode;

  div.prepend(label);

  const placeholder = getSeparatedWords(nameInput);

  input.setAttribute('placeholder', `${placeholder}`);
});
