'use strict';

const fields = document.querySelectorAll('.field');
const fieldTexts = document.querySelectorAll('.field-text');

const fieldTextIds = [...fieldTexts].map(item => item.id);
const fieldTextNames = [...fieldTexts].map(item => item.name);

const splittedWords = fieldTextNames.map(item => {
  return item[0]
    .toUpperCase() + item
    .slice(1)
    .replace(/([A-Z][a-z]+)/g, ' $1 ')
    .trim();
});

fields.forEach((item, i) => {
  item.insertAdjacentHTML('beforeend', `
  <label class="field-label" for="${fieldTextIds[i]}">
    ${splittedWords[i].toUpperCase()}
  </label>
  `);
});

fieldTexts.forEach((item, i) => {
  item.setAttribute('placeholder', splittedWords[i]);
});
