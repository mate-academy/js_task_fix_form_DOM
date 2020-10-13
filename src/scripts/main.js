'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = ['field-label'];
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.placeholder = convertString(input.name);
  input.parentNode.append(label);
}

function convertString(string) {
  let stringConverted = '';

  for (const i of string) {
    if (i === i.toUpperCase() && string.indexOf('i') !== 0) {
      stringConverted += ' ';
    }
    stringConverted += i;
  }

  return stringConverted[0].toUpperCase()
    + stringConverted.slice(1).toLowerCase();
}
