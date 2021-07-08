'use strict';

const inputs = document.querySelectorAll('input');
const label = document.createElement('label');

label.classList.add('field-label');

inputs.forEach(input => {
  label.innerText = input.name;
  label.htmlFor = input.id;
  input.insertAdjacentHTML('beforebegin', label.outerHTML);
  input.placeholder = capitalize(input.name);
});

function capitalize(text) {
  const splitedWord = text.replace(/([A-Z]+)/g, ' $1');

  return splitedWord[0].toUpperCase() + splitedWord.slice(1);
}
