'use strict';

// write code here
const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const placeholderAddSpace = input.name.replace(/([A-Z])/g, ' $1');

  const placeholder = placeholderAddSpace
    .charAt(0).toUpperCase()
  + placeholderAddSpace
    .slice(1);

  input.setAttribute('placeholder', placeholder);

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = placeholder;

  input.before(label);
}
