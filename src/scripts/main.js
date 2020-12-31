'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';

  label.htmlFor = input.id;

  label.textContent = placeholderNormalize(input.name).toUpperCase();

  input.placeholder = placeholderNormalize(input.name);

  input.parentElement.appendChild(label);
}

function placeholderNormalize(string) {
  const result = [];
  const arrString = string.split('');

  for (let i = 0; i < arrString.length; i++) {
    if (arrString[i] !== arrString[i].toLowerCase() && i > 0) {
      result.push(` ${arrString[i].toLowerCase()}`);
    } else {
      result.push(arrString[i]);
    }
  }

  result[0] = result[0].toUpperCase();

  return result.join('');
}
