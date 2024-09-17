'use strict';

// write code here

function removeCamelCase(str) {
  let result = '';

  for (const char of str) {
    if (char === char.toUpperCase()) {
      result += ' ' + char;
      continue;
    }

    result += char;
  }

  return result;
}

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  input.placeholder = input.name[0].toUpperCase()
    + removeCamelCase(input.name.slice(1));

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.before(label);
});
