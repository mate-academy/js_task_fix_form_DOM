'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const getLabel = document.createElement('label');

  getLabel.className = 'field-label';
  getLabel.htmlFor = input.id;
  getLabel.textContent = input.name;

  input.placeholder = editPlaceholder(input.name);

  input.parentElement.append(getLabel);
}

function editPlaceholder(str) {
  const letters = [];

  for (const item of str.slice(1)) {
    if (item === item.toUpperCase()) {
      letters.push(' ', item);
    } else {
      letters.push(item);
    }
  }

  return str[0].toUpperCase() + letters.join('');
}
