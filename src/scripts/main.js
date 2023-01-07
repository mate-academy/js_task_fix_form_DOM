'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = splitWords(input.name).toUpperCase();
  input.placeholder = splitWords(input.name).toUpperCase();
  input.parentElement.append(label);
}

function splitWords(word) {
  let result = '';

  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() === word[i]) {
      result += ' ';
    }
    result += word[i];
  }

  return result;
}
