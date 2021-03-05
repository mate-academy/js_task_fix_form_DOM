'use strict';

const inputs = document.querySelectorAll('.field-text');

function capitalizing(word) {
  return word.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
}

function splitWords(word) {
  return word.replace(/[A-Z]/g, ' $&');
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = splitWords(input.name).toUpperCase();

  input.parentElement.append(label);
  input.placeholder = capitalizing(splitWords(input.name));
}
