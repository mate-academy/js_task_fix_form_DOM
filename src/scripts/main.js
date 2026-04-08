'use strict';

const formInputs = document.querySelectorAll('input');

const getSeparatedStr = (str) => {
  const upperCaseLetters = str.match(/[A-Z]/g);

  if (!upperCaseLetters) {
    return str;
  }

  let newStr = str;

  upperCaseLetters.forEach((letter) => {
    const index = str.indexOf(letter);

    newStr = str.slice(0, index) + ' ' + str.slice(index);
  });

  return newStr;
};

formInputs.forEach((input) => {
  const nameOfInput = getSeparatedStr(input.name);
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.name);
  label.textContent = nameOfInput;

  input.parentElement?.append(label);

  input.placeholder = nameOfInput[0].toUpperCase() + nameOfInput.slice(1);
});
