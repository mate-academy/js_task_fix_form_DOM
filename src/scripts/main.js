'use strict';

const inputs = [...document.querySelectorAll('input')];

function capitalize(string) {
  const letters = string.split('');
  const formattedLetters = [];

  formattedLetters.push(letters[0].toUpperCase());

  for (let i = 1; i < letters.length; i++) {
    if (letters[i] === letters[i].toUpperCase()) {
      formattedLetters.push(' ', letters[i]);
    } else {
      formattedLetters.push(letters[i]);
    }
  }

  return formattedLetters.join('');
}

inputs.map((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlfor = input.id;
  label.textContent = capitalize(input.name);

  input.parentElement.append(label);

  input.placeholder = capitalize(input.name);
});
