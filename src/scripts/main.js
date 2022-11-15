'use strict';

const allInput = document.querySelectorAll('input');

function correctName(text) {
  return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

for (const input of [...allInput]) {
  const label = document.createElement('label');

  label.className = `field-label`;
  label.htmlFor = input.id;
  label.textContent = input.name.toUpperCase();
  input.placeholder = correctName(input.name);
  input.parentElement.append(label);
}
