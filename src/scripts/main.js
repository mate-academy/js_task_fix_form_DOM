'use strict';

const inputs = [...document.querySelectorAll('form .field input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  label.textContent = input.name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (match) => match.toUpperCase());

  const placeholderText = input.name
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (match) => match.toUpperCase());

  // console.log(placeholderText);

  input.setAttribute('placeholder', placeholderText);

  const inputParent = input.closest('.field');

  inputParent.prepend(label);
});
