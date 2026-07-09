'use strict';

// write code here
const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = capitalize(input.name);
  input.placeholder = capitalize(input.name);
  input.parentElement.prepend(label);
}

function capitalize(text) {
  return text
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (firstLetter) => firstLetter.toUpperCase());
}
