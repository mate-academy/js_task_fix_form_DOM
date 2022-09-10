'use strict';

const inputs = document.querySelectorAll('.field-text');

function forAddText(word) {
  let text = word.slice(0, 1).toUpperCase();

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      text += ' ' + word[i].toLowerCase();
      i++;
    }
    text += word[i];
  }

  return text;
}

[...inputs].map(elem => {
  elem.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${elem.id}">
    ${forAddText(elem.name)}</label>
  `);

  elem.placeholder = forAddText(elem.name);
});
