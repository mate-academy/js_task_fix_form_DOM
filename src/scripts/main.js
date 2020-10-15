'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = ['field-label'];
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.parentNode.append(label);
  input.placeholder = editingPlaceholder(input.name);
}

function editingPlaceholder(string) {
  const letters = [];

  for (const symbol of string.slice(1)) {
    if (symbol === symbol.toUpperCase()) {
      letters.push(' ', symbol.toLowerCase());
    } else {
      letters.push(symbol);
    }
  }

  return string[0].toUpperCase() + letters.join('');
}
