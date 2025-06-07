'use strict';

const arrOfInput = document.querySelectorAll('input');

arrOfInput.forEach((input) => {
  const inputName = input.name;
  const toNormalWord = toNormalFormat(inputName);
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.className = 'field-label';
  label.textContent = toNormalWord;

  input.parentNode.insertBefore(label, input);
});

arrOfInput.forEach((inp) => {
  const fieldName = inp.name;
  const toNormalField = toNormalFormat(fieldName);

  inp.placeholder =
    toNormalField.charAt(0).toUpperCase() + toNormalField.slice(1);
});

function toNormalFormat(str) {
  return str
    .split(/(?=[A-Z])/)
    .join(' ')
    .toLowerCase();
}
