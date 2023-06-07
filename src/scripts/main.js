'use strict';

const myInputs = document.querySelectorAll('input');

function capitalize(str) {
  let newStr = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += ' ';
    }
    newStr += str[i];
  }

  return newStr;
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

for (const input of myInputs) {
  const touchpad = document.createElement('label');

  touchpad.className = 'field-label';
  touchpad.htmlFor = `${input.id}`;

  insertAfter(input, touchpad);

  input.placeholder = capitalize(input.name);
  touchpad.textContent = capitalize(input.name);
}
