'use strict';

const formInputs = document.querySelectorAll('input');

for (const input of formInputs) {
  const formLabel = document.createElement('label');

  formLabel.className = 'field-label';
  formLabel.htmlFor = input.id;
  formLabel.textContent = separateString(input.name);
  input.before(formLabel);

  input.placeholder = separateString(input.name[0]
    .toUpperCase() + input.name.slice(1));
}

function separateString(string) {
  let result = string[0];

  for (let i = 1; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += ' ';
    }

    result += string[i];
  }

  return result;
}
