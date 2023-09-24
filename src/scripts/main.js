'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();
  label.className = 'field-label';

  input.placeholder = capitalize(input.name);
  input.insertAdjacentElement('beforebegin', label);
}

function capitalize(text) {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}
