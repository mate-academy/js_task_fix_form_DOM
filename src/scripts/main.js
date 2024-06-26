'use strict';

const inputElement = document.querySelectorAll('input');

const correctName = (textInInput) => {
  let correctText = '';

  for (let i = 0; i < textInInput.length; i++) {
    if (i === 0) {
      correctText += textInInput[0].toUpperCase();
    } else if (textInInput[i].match(/[A-Z]/g)) {
      correctText += ' ' + textInInput[i];
    } else {
      correctText += textInInput[i];
    }
  }

  return correctText;
};

const addLabel = (formInputs) => {
  formInputs.forEach((input) => {
    input.placeholder = correctName(input.name);

    input.insertAdjacentHTML(
      'beforebegin',
      `<label for="${input.id}" class="field-label">${correctName(input.name)}</label>`,
    );
  });
};

addLabel(inputElement);
