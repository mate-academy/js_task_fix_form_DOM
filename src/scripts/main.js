'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.parentElement.appendChild(label);

  input.placeholder = capitalize(input.name);
}

function capitalize(string) {
  const letters = [];

  for (const char of string.slice(1)) {
    if (char === char.toUpperCase()) {
      letters.push(' ', char.toLowerCase());
    } else {
      letters.push(char);
    }
  }

  return string[0].toUpperCase() + letters.join('');
}
