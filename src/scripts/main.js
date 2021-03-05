'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = splitWords(input.name);
  input.placeholder = splitWords(input.name);
  input.placeholder = input.placeholder.toUpperCase();
  input.parentElement.append(label);
}

function splitWords(word) {
  return word.replace(/([a-z])([A-Z])/g, '$1 $2');
}
