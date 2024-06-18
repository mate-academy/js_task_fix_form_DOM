'use strict';

const inputElement = document.querySelectorAll('input');

const correctPlaceholder = (textInInput) => {
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
    input.placeholder = correctPlaceholder(input.name);

    input.insertAdjacentHTML(
      'beforebegin',
      `<label for="${input.id}" class="field-label">${input.name}</label>`,
    );
  });
};

addLabel(inputElement);
