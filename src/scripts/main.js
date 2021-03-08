'use strict';

function capitalizeFirstLetter(string) {
  let modifiedString = '';

  for (const letter of string) {
    if (letter === letter.toUpperCase()) {
      modifiedString += ' ';
    }
    modifiedString += letter;
  }

  return modifiedString[0].toUpperCase() + modifiedString.slice(1);
}

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.setAttribute('class', 'field-label');

  input.setAttribute('placeholder', capitalizeFirstLetter(input.name));
  input.before(label);

  label.innerText = capitalizeFirstLetter(input.name);
}
