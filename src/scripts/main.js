'use strict';

function camelToTitleCase(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    const char = str.charAt(i);

    if (char === char.toUpperCase()) {
      result += ' ' + char.toLowerCase();
    } else {
      result += char;
    }
  }

  return result.charAt(0).toUpperCase() + result.slice(1);
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = camelToTitleCase(input.name).toUpperCase();
  input.placeholder = camelToTitleCase(input.name);

  const parentInput = input.closest('.field');

  parentInput.appendChild(label);
});
