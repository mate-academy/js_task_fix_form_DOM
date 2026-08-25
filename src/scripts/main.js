'use strict';

const inputs = document.querySelectorAll('form input');

const toTitle = (inputName) =>
  inputName
    .replace(/([A-Z])/g, ' $1')
    .toLowerCase()
    .trim()
    .replace(/^./, (letter) => letter.toUpperCase());

inputs.forEach((input) => {
  const text = toTitle(input.name);
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = text;

  input.placeholder = text;
  input.parentElement.append(label);
});
