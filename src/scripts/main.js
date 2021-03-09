'use strict';

const inputs = document.querySelectorAll('.field-text');

function addGap(text) {
  const textWithgap = [];
  const splittedWord = text.split('');

  textWithgap.push(splittedWord[0].toUpperCase());

  for (let i = 1; i < splittedWord.length; i++) {
    if (splittedWord[i] === splittedWord[i].toUpperCase()) {
      textWithgap.push(' ');
    }

    textWithgap.push(splittedWord[i]);
  }

  return textWithgap.join('');
}

document.createElement('label');

for (const input of inputs) {
  const label = document.createElement('label');

  label.htmlFor = input.name;
  label.className = 'field-label';
  label.textContent = input.name;
  input.before(label);

  input.placeholder = addGap(input.name);
}
