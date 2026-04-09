'use strict';

const inputs = document.querySelectorAll('input');
const inputsArray = [...inputs];

function createString(str) {
  let newStr = '';

  if (/[A-Z]/.test(str)) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) {
        newStr += `${str.slice(0, i)} ${str.slice(i)}`;
      }
    }
  } else {
    newStr += str;
  }

  return newStr.toUpperCase();
}

for (const input of inputsArray) {
  const myLabel = document.createElement('label');

  myLabel.className = 'field-label';
  myLabel.setAttribute('for', input.id);
  myLabel.innerText = createString(input.name);
  input.before(myLabel);
  input.setAttribute('placeholder', createString(input.name));
}
