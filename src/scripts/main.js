'use strict';

const inputs = [...document.getElementsByTagName('input')];

function toClassicCase(camelWord) {
  let upperLetter = '';

  for (const letter of camelWord) {
    if (letter >= 'A' && letter <= 'Z') {
      upperLetter = letter;
    }
  }

  return camelWord
    .replace(`${upperLetter}`, ` ${upperLetter}`)
    .replace(`${camelWord[0]}`, `${camelWord[0].toUpperCase()}`);
}

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.htmlFor = `${inputs[i].id}`;
  label.textContent = `${toClassicCase(inputs[i].name)}`;
  inputs[i].placeholder = `${toClassicCase(inputs[i].name)}`;

  inputs[i].before(label);
}
