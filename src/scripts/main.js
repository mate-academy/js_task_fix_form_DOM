'use strict';

const inputsList = document.querySelectorAll('.field-text');

for (const input of inputsList) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = splitWords(input.name).toUpperCase();

  input.parentElement.append(label);
  input.placeholder = capitalize(splitWords(input.name));
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function splitWords(word) {
  return word.replace(/[A-Z]/g, ' $&');
}
