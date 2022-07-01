'use strict';

const inputsList = document.querySelectorAll('input');

for (const inputsElement of inputsList) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = inputsElement.id;

  let placeholderName = '';

  for (const letter of inputsElement.name) {
    if (letter !== letter.toUpperCase()) {
      placeholderName += letter;
    } else {
      placeholderName += ` ${letter}`;
    }
  }

  placeholderName = placeholderName[0].toUpperCase() + placeholderName.slice(1);

  inputsElement.placeholder = placeholderName;
  label.textContent = placeholderName.toUpperCase();

  inputsElement.parentElement.append(label);
}
