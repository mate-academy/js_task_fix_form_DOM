'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);
  label.setAttribute('class', 'field-label');
  input.setAttribute('placeholder', capitalizeFirstLetter(input.name));
  input.before(label);
  label.innerText = capitalizeFirstLetter(input.name);
}

function capitalizeFirstLetter(string) {
  let result = '';

  for (const letter of string) {
    if (letter === letter.toUpperCase()) {
      result += ' ';
    }
    result += letter;
  }

  return result.charAt(0).toUpperCase() + result.slice(1);
}
