'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of [...inputs]) {
  const label = document.createElement('label');
  const inputContainer = input.parentElement;

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.placeholder = capitalize(input.name);

  inputContainer.append(label);
}

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1);
}
