'use strict';

const inputs = document.querySelectorAll('.field-text');

const wordWithCapitalLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();
  input.placeholder = wordWithCapitalLetter(input.name);

  input.parentElement.append(label);
}
