'use strict';

const inputs = document.querySelectorAll('.field-text');

function forLable(word) {
  let label = '';

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      label += ' ' + word[i];
      i++;
    }
    label += word[i];
  }

  return label;
}

[...inputs].map(elem => {
  elem.insertAdjacentHTML('beforebegin', `
    <label class="field-label" for="${elem.id}">
    ${forLable(elem.name)}</label>
  `);

  elem.placeholder = elem.name[0].toUpperCase();

  for (let i = 1; i < elem.name.length; i++) {
    if (elem.name[i] === elem.name[i].toUpperCase()) {
      elem.placeholder += ` ${elem.name[i].toLowerCase()}`;
      i++;
    }
    elem.placeholder += elem.name[i];
  }
});
