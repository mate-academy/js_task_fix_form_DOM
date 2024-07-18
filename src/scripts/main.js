'use strict';

const input = [...document.querySelectorAll('input')];

function wordSpace(word) {
  let wordWithSpace = word[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      wordWithSpace += ' ';
    }
    wordWithSpace += word[i];
  }

  return wordWithSpace;
}

for (const el of input) {
  const label = document.createElement('label');

  el.setAttribute('placeholder', wordSpace(el.name));
  label.textContent = wordSpace(el.name);
  label.className = 'field-label';
  label.setAttribute('for', el.id);
  el.before(label);
}
