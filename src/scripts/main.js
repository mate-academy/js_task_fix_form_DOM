'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  let placeholder = input.name[0].toUpperCase();

  for (let i = 1; i < input.name.length; i++) {
    if (input.name[i] === input.name[i].toUpperCase()) {
      placeholder += ' ';
    }

    placeholder += input.name[i].toLowerCase();
  }

  input.placeholder = placeholder;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = placeholder.toUpperCase();

  input.parentNode.append(label);
}
