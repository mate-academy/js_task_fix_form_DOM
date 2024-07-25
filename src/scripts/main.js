'use strict';

const ar = document.querySelectorAll('.field');

ar.forEach((el) => {
  const label = document.createElement('label');
  const input = el.lastElementChild;
  const correctLabelName = getCorrectText(input.getAttribute('name'));

  label.className = 'field-label';
  input.setAttribute('placeholder', correctLabelName);
  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = correctLabelName;
  el.prepend(label);
});

function getCorrectText(value) {
  const separator = value.match(/[A-Z]/);
  const splitedWord = value.split(separator);

  if (splitedWord.length > 1) {
    splitedWord[1] = separator + splitedWord[1];
  }

  const word = splitedWord.join(' ');

  return word.charAt(0).toUpperCase() + word.slice(1);
}
