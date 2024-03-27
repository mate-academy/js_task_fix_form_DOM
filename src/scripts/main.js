'use strict';

function getIndexOfBigLetter(text, fromIndex) {
  for (let i = fromIndex; i < text.length; i++) {
    if (text[i] !== text[i].toLowerCase()) {
      return i;
    }
  }

  return -1;
}

function separate(text) {
  const index = getIndexOfBigLetter(text, 1);

  if (index === -1) {
    return text;
  }

  return text.slice(0, index) + ' ' + separate(text.slice(index));
}

function capitalize(text) {
  return text.slice(0, 1).toUpperCase() + separate(text.slice(1)).toLowerCase();
}

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = separate(input.getAttribute('name'));

  input.placeholder = capitalize(input.getAttribute('name'));
  input.before(label);
}
