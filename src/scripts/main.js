'use strict';

const capitalize = (value) => value[0].toUpperCase() + value.slice(1);
const parseStringFromCamelCase = (value) => {
  let parsedString = '';

  for (const char of value) {
    if (char === char.toUpperCase()) {
      parsedString += ` ${char}`;
      continue;
    }

    parsedString += char;
  }

  return parsedString;
};

const inputsSelectors = [...document.querySelectorAll('input')];

inputsSelectors.map((input) => {
  const inputName = input.getAttribute('name');
  const labelText = parseStringFromCamelCase(inputName);

  const labelId = input.getAttribute('id');
  const labelElement = document.createElement('label');

  labelElement.textContent = labelText;
  labelElement.classList.add('field-label');

  labelElement.setAttribute('for', labelId);
  input.setAttribute('placeholder', capitalize(labelText));

  input.parentElement.append(labelElement);
});
