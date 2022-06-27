'use strict';

// write code here
const fields = document.querySelectorAll(`.field`);

const fieldsArray = [...fields];

const stringHandler = (inputName) => {
  const string = inputName;
  let newString = string;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      newString = string.slice(0, i) + ' ' + string.slice(i);
    }
  }

  return newString.slice(0, 1).toUpperCase() + newString.slice(1);
};

fieldsArray.forEach(field => {
  const input = field.querySelector(`.field-text`);
  const inputName = input.getAttribute(`name`);
  const text = stringHandler(inputName);
  const label = document.createElement('label');

  label.classList.add(`field-label`);
  label.textContent = text;
  field.appendChild(label);
  input.setAttribute('placeholder', text);
});
