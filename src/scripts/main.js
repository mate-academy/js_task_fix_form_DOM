'use strict';

const inputs = document.querySelectorAll('input');

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

for (const input of inputs) {
  const label = document.createElement('label');
  const inputName = input.name.replace(/[A-Z]/g, (letter) => ` ${letter}`);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = capitalize(inputName);
  input.placeholder = capitalize(inputName);
  input.parentElement.append(label);
};
