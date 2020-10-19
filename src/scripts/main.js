'use strict';

const inputs = document.querySelectorAll('input');

for (const key of inputs) {
  const label = document.createElement('label');

  label.className = [ 'field-label' ];
  label.textContent = key.name;
  label.htmlFor = key.id;
  key.placeholder = placeholderText(key.name);
  key.parentNode.append(label);
}

function placeholderText(string) {
  let correctPlaceholder = '';

  for (const char of string) {
    if (char === char.toUpperCase() && string.indexOf('char') !== 0) {
      correctPlaceholder += ' ';
    }
    correctPlaceholder += char;
  }

  return correctPlaceholder[0]
    .toUpperCase() + correctPlaceholder
    .slice(1)
    .toLowerCase();
}
