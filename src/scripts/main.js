'use strict';

const inputs = Array.from(document.querySelectorAll('.field-text'));

const handlePlaceholder = (textInInput) => {
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

function handleLabels(someInputs) {
  someInputs.forEach((input) => {
    input.placeholder = handlePlaceholder(input.name);

    input.insertAdjacentHTML(
      'beforebegin',
      `<label for="${input.id}" class="field-label">${input.placeholder}</label>`,
    );
  });
}

handleLabels(inputs);
