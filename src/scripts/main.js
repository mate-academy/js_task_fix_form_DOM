'use strict';
// passing test
// write code here

const getAllInput = document.querySelectorAll('.field-text');

function placeHolderText(textInputs) {
  let textValue = '';

  for (let i = 0; i < textInputs.length; i++) {
    if (i === 0) {
      textValue += textInputs[0].toUpperCase();
    } else if (textInputs[i].match(/[A-Z]/g)) {
      textValue += ' ' + textInputs[i];
    } else {
      textValue += textInputs[i];
    }
  }

  return textValue;
}

function labelValue(labelText) {
  labelText.forEach((input) => {
    input.placeholder = placeHolderText(input.name);

    input.insertAdjacentHTML(
      'beforebegin',
      `<label for="${input.id}" class="field-label">${input.placeholder}</label>`,
    );
  });
}

labelValue(getAllInput);
