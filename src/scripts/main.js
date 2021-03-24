'use strict';

// write code here

function convert(str) {
  const newStr = str[0].toUpperCase() + str.slice(1);
  let result = '';

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === newStr[i].toUpperCase() && i !== 0) {
      result += ' ' + newStr[i];
    } else {
      result += newStr[i];
    }
  }

  return result;
}

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  const placeholder = convert(input.name);

  input.placeholder = placeholder;
  label.innerText = placeholder;

  input.parentElement.append(label);
};
