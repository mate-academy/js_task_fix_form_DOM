'use strict';

// write code here

const inputs = document.querySelectorAll('input');

function getCapitalizedPhrase(phrase) {
  const bigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let capitalizedPhrase = '';

  for (let i = 0; i < phrase.length; i++) {
    if (i === 0) {
      capitalizedPhrase += phrase[i].toUpperCase();
    } else if (bigLetters.includes(phrase[i])) {
      capitalizedPhrase += ' ' + phrase[i];
    } else {
      capitalizedPhrase += phrase[i];
    }
  }

  return capitalizedPhrase;
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name.toUpperCase();

  const placeholderText = getCapitalizedPhrase(input.name);

  input.setAttribute('placeholder', placeholderText);
  input.before(label);
}
