'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const inputLabel = document.createElement('label');
  let ofInputNameStr = '';

  for (const char of input.name) {
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      ofInputNameStr += char;
    } else {
      ofInputNameStr += ` ${char}`;
    }
  }

  inputLabel.className = ('field-label');
  inputLabel.htmlFor = input.id;
  inputLabel.textContent = ofInputNameStr;

  const placeholderString = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = placeholderString;
  input.parentElement.append(inputLabel);
}
