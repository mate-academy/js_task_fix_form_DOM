'use strict';

const pageInputs = document.querySelectorAll('input');
const inputs = [...pageInputs];

function formatInputPlaceholder(inputName) {
  const firstLetter = inputName[0].toUpperCase();
  const leftLetters = inputName.slice(1).toLowerCase();

  return firstLetter + leftLetters;
}

for (const input of inputs) {
  const labelElement = document.createElement('label');

  labelElement.classList.add('field-label');
  labelElement.setAttribute('for', input.id);

  labelElement.textContent = input.name;

  input.placeholder = formatInputPlaceholder(input.name);

  input.parentNode.prepend(labelElement);
}
