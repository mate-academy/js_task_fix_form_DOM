'use strict';

// write code here

const allInputs = document.querySelectorAll('.field-text');

function splitLabelWord(word) {
  return word.replace(/[A-Z]/g, ' $&');
}

function splitPlaceholderWord(word) {
  const capitalizeLetter = word[0].toUpperCase() + word.slice(1);
  const addSpaceBetween = capitalizeLetter.replace(/[A-Z]/g, ' $&').trim();

  return addSpaceBetween;
}

[...allInputs].map(elem =>
  elem.insertAdjacentHTML('beforebegin', `
  <label for="${elem.id}" class="field-label">
    ${splitLabelWord(elem.name)}
  </label>
`));

[...allInputs].map(elem =>
  elem.setAttribute('placeholder', splitPlaceholderWord(elem.name))
);
