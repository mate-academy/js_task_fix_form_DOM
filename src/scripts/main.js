'use strict';

const fields = [...document.querySelectorAll('.field')];

fields.forEach(field => {
  const inputElement = field.querySelector('input');
  const { id: inputID, name: inputName } = inputElement;

  field.insertAdjacentHTML('afterbegin', `
    <label class="field-label" for="${inputID}">
      ${capitalize(inputName)}
    </label>
  `);

  inputElement.placeholder = capitalize(inputName);
});

function capitalize(str) {
  const result = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result.push(str.slice(0, i));
      result.push(str.slice(i));
    }
  }

  if (result.length === 0) {
    result.push(str);
  }

  const firstLetter = result[0].charAt(0).toUpperCase();
  const nextLetters = result[0].slice(1);

  result[0] = firstLetter + nextLetters;

  return result.join(' ');
};
