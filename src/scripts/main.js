'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.parentNode.append(label);

  const placeholder = separator(input.name);

  input.placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);
}

function separator(word) {
  let result = '';

  for (const letter of word) {
    if (letter === letter.toUpperCase()) {
      result += ' ';
    }

    result += letter;
  }

  return result;
}
