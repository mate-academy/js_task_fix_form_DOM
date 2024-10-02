'use strict';

const inputFields = document.getElementsByClassName('field-text');
const inputsArr = [...inputFields];

inputsArr.forEach((input) => {
  const text = addSpaces(input.name[0].toUpperCase() + input.name.slice(1));

  input.setAttribute('placeholder', `${text}`);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = text;

  const container = input.parentNode;

  container.insertBefore(label, input);
});

function addSpaces(str) {
  let result = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += ' ';
    }
    result += str[i];
  }

  return result;
}
