'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const field = document.createElement('label');

  field.htmlFor = input.id;
  field.className = 'field-label';
  field.textContent = capitalize(input.name);
  input.parentElement.append(field);
  input.placeholder = capitalize(input.name);
});

function capitalize(string) {
  const words = string.split('');

  words.forEach((letter, index) => {
    if (index === 0) {
      words[index] = letter.toUpperCase();
    }

    if (letter.toUpperCase() === letter) {
      words[index] = ' ' + letter.toUpperCase();
    }
  });

  return words.join('').trim();
}

capitalize('nextTask');
