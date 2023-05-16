'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.parentNode.append(label);

  let placeholder = '';

  for (const letter of input.name) {
    if (letter === letter.toUpperCase()) {
      placeholder += ' ';
    }

    placeholder += letter;
  }

  input.placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);
}
