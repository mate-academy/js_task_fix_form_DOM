'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.innerText = capitalize(input.name);
  label.htmlFor = input.id;
  input.parentElement.prepend(label);
  input.placeholder = capitalize(input.name);
});

function capitalize(text) {
  const splitedWord = text.replace(/([A-Z]+)/g, ' $1');

  return splitedWord[0].toUpperCase() + splitedWord.slice(1);
}
