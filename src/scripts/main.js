'use strict';

const myInputs = document.querySelectorAll('input');

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

for (const input of myInputs) {
  const touchpad = document.createElement('label');

  touchpad.className = 'field-label';
  touchpad.htmlFor = `${input.id}`;

  console.log(touchpad.htmlFor);
  console.log(touchpad.className);

  const capitalized = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  touchpad.textContent = capitalized;
  input.placeholder = capitalized;

  insertAfter(input, touchpad);
}


