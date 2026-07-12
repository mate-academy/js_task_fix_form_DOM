'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  const forAttr = input.getAttribute('id');

  label.htmlFor = forAttr;

  const nameAttr = input.getAttribute('name');

  label.textContent = nameAttr;

  input.placeholder = capitalize(nameAttr);

  input.before(label);
});

function capitalize(text) {
  const firstLetter = text[0].toUpperCase();

  const restLetters = text.slice(1);

  const result = firstLetter + restLetters;

  return result;
}
