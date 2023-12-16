'use strict';

// write code here
function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function makeWords(string) {
  if (string.toLowerCase() === string) {
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() !== string[i]) {
      return string.split(`${string[i]}`).join(` ${string[i]}`);
    }
  }
}

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const labelElement = document.createElement('label');
  const inputName = makeWords(input.name);

  labelElement.textContent = inputName;
  labelElement.setAttribute('for', input.id);
  labelElement.setAttribute('class', 'field-label');
  input.before(labelElement);

  input.setAttribute('placeholder', capitalize(inputName));
}
