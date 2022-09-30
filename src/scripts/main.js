'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.className = 'field-label';
  label.textContent = input.name;

  const placeholder = input.name
    .split('')
    .map(char => {
      if (char === char.toUpperCase()) {
        return ' ' + char;
      }

      return char;
    })
    .join('');

  input.placeholder = placeholder[0].toUpperCase()
    + placeholder.slice(1);

  input.parentElement.append(label);
});
