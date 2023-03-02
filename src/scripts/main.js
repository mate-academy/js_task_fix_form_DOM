'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(function(input) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = toUpCase(input.name);
  input.placeholder = toUpCase(input.name);

  input.after(label);
});

function toUpCase(word) {
  const result = [];
  let condition = false;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) {
      condition = true;
      result.push(word.slice(0, i));
      result.push(word.slice(i));
    }
  }

  if (condition) {
    return result.join(' ').toUpperCase();
  }

  return word.toUpperCase();
}
