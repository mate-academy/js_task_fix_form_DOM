'use strict';

const inputElements = document.getElementsByTagName('input');

function getCorrectStr(str) {
  const newStr = str.split(/(?=[A-Z])/).join(' ');

  return newStr;
}

[...inputElements].forEach((input) => {
  const { name: str } = input;

  const validStr = getCorrectStr(str);

  input.placeholder = validStr.charAt(0).toUpperCase() + validStr.slice(1);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = validStr.toUpperCase();

  input.parentElement.append(label);
});
