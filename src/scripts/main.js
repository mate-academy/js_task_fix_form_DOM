'use strict';

const inputs = document.querySelectorAll('input');

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = capitalize(input.name);
  input.placeholder = capitalize(input.name);
  input.parentElement.append(label);
};
