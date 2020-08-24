'use strict';

// write code here

const inputs = [ ...document.querySelectorAll('input') ];

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = toNormalizeText(input.name);
  input.before(label);

  input.placeholder = toNormalizeText(input.name);
}

function toNormalizeText(text) {
  let result = '';

  result += text[0].toUpperCase();

  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i].toUpperCase()) {
      result += ' ';
    }

    result += text[i].toLowerCase();
  }

  return result;
}
