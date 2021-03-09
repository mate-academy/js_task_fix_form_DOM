'use strict';

// write code here
const inputs = document.querySelectorAll('input');

function formatPlaceholder(string) {
  const placeholderAddSpace = string.name.replace(/([A-Z])/g, ' $1');

  return placeholderAddSpace
    .charAt(0).toUpperCase()
  + placeholderAddSpace
    .slice(1);
}

for (const input of inputs) {
  const label = document.createElement('label');

  input.placeholder = formatPlaceholder(input);
  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = formatPlaceholder(input);

  input.before(label);
}
