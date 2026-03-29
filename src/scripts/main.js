'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  if (!input.id) {
    input.id = `input-${input.name}`;
  }

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;
  label.textContent = capitalize(input.name);
  input.placeholder = capitalize(input.name);
  input.parentNode.insertBefore(label, input);
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// write code here
