'use strict';

const inputs = document.querySelectorAll('input');

function correctLabel(word) {
  let string = word[0].toUpperCase();

  for (let i = 1; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      string += ' ' + word[i].toLowerCase();
      continue;
    }

    string += word[i];
  }

  return string;
}

inputs.forEach(input => {
  const label = document.createElement('label');
  const field = input.parentElement;

  label.className = 'field-label';
  label.htmlFor = input.id;
  input.placeholder = correctLabel(input.name);
  label.textContent = input.placeholder.toUpperCase();

  field.append(label);
});
