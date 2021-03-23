'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  const placeholder = input.name[0].toUpperCase()
  + input.name
    .slice(1)
    .replace(/([A-Z][a-z]+)/g, ' $1 ')
    .trim();

  input.placeholder = placeholder;
  label.innerText = placeholder;

  input.parentElement.append(label);
};
