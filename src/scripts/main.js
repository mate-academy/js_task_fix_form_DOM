'use strict';

const inputElements = document.querySelectorAll('input');

for (const input of inputElements) {
  const labelElement = document.createElement('label');
  const parentElement = input.parentNode;
  const firstLetter = input.name[0].toUpperCase();
  const restLetters = input.name.slice(1).toLowerCase();

  labelElement.classList.add('field-label');
  labelElement.setAttribute('for', input.id);
  labelElement.textContent = input.name;

  const placeholderInput = firstLetter + restLetters;

  input.placeholder = placeholderInput;

  parentElement.insertBefore(labelElement, input);
}
