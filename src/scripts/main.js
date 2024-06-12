'use strict';

const inputs = document.querySelectorAll('input');

const divideWords = (string) => {
  let dividedString = string;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      dividedString = `${string.slice(0, i)} ${string.slice(i)}`;

      break;
    }
  }

  dividedString = dividedString
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return dividedString;
};

const updateInputs = (input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('htmlFor', input.id);
  label.textContent = divideWords(input.name);

  input.before(label);
  input.setAttribute('placeholder', divideWords(input.name).toUpperCase());
};

inputs.forEach((item) => updateInputs(item));
