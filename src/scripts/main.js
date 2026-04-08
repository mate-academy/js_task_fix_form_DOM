'use strict';

const listOfFields = [...document.querySelectorAll('.field')];

const formatLabel = (inputName) => {
  let formattedText = '';

  for (let i = 0; i < inputName.length; i++) {
    const char = inputName[i];

    if (i === 0) {
      formattedText += char.toUpperCase();
    } else if (char >= 'A' && char <= 'Z') {
      formattedText += ' ' + char.toLowerCase();
    } else {
      formattedText += char;
    }
  }

  return formattedText;
};

listOfFields.forEach((field) => {
  const label = document.createElement('label');

  label.setAttribute('class', 'field-label');

  const input = field.querySelector('input');
  const inputName = input.getAttribute('name');

  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = formatLabel(inputName);
  input.setAttribute('placeholder', label.textContent);
  field.prepend(label);
});
