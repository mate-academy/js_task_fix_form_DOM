'use strict';

const fieldsTextElements = document.querySelectorAll('.field-text');

function getWords(word) {
  return word.slice(0, 1).toUpperCase()
    + word.slice(1).split(/(?=[A-Z])/).join(' ').toLowerCase();
}

fieldsTextElements.forEach(element => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = getWords(element.name).toUpperCase();
  label.htmlFor = element.id;

  element.placeholder = getWords(element.name);
  element.parentNode.prepend(label);
});
