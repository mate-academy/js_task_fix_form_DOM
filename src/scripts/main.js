'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.textContent = capitalize(input.name);
  label.setAttribute('for', input.id);
  label.setAttribute('class', 'field-label');
  input.parentElement.append(label);

  input.placeholder = capitalize(input.name);
}

function capitalize(str) {
  let newStringSentenceCase = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStringSentenceCase += ' ';
    }
    newStringSentenceCase += str[i].toLowerCase();
  }

  newStringSentenceCase = newStringSentenceCase
    .charAt(0).toUpperCase() + newStringSentenceCase.substr(1);

  return newStringSentenceCase;
}
