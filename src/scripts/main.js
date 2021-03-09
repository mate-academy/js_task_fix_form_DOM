'use strict';

const inputs = [...document.querySelectorAll('input')];

function capitalize(string) {
  const letters = string.split('');

  const words = letters.map(x => x === x.toUpperCase() ? ' ' + x : x);
  const firstLetter = letters[0].toUpperCase();

  words.splice(0, 1);
  words.unshift(firstLetter);

  return words.join('');
}

inputs.map((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlfor = input.id;
  label.textContent = capitalize(input.name);

  input.parentElement.append(label);

  input.placeholder = capitalize(input.name);
});
