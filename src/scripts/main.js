'use strict';

const inputs = document.querySelectorAll('input');

function capitalizeAndSpace(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      result += string[i].toUpperCase();

      continue;
    }

    if (string[i] === string[i].toUpperCase()) {
      result += ' ';
    }

    result += string[i];
  }

  return result;
}

for (const input of inputs) {
  const label = document.createElement('label');
  const text = capitalizeAndSpace(input.name);

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = text;

  input.before(label);
  input.placeholder = text;
}
