'use strict';

function normalizeString(str) {
  let normalizedString = '';

  str.split('').forEach((char, i) => {
    if (i === 0) {
      normalizedString += char.toUpperCase();
    } else if (char === char.toUpperCase()) {
      normalizedString += ` ${char}`;
    } else {
      normalizedString += char;
    }
  });

  return normalizedString;
}

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const id = input.getAttribute('id');

  const text = normalizeString(input.getAttribute('name'));
  const label = document.createElement('label');
  let placeholder = document.createElement('placeholder');

  label.classList.add('field-label');
  label.setAttribute('for', id);
  label.textContent = text;
  placeholder = text;

  input.parentNode.insertBefore(label, input);
  input.setAttribute('placeholder', placeholder);
});
