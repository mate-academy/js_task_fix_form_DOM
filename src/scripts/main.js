'use strict';

const inputs = document.querySelectorAll('.field-text');

const makeCamelCase = (word) => {
  return word.split('')
    .map(char => {
      if (char === char.toUpperCase()) {
        return ' ' + char;
      }

      return char;
    })
    .join('');
};

inputs.forEach(input => {
  const label = document.createElement('label');
  const fieldName = makeCamelCase(input.name);

  label.htmlFor = input.id;
  label.className = 'field-label';
  label.textContent = fieldName;

  const placeholder = fieldName;

  input.placeholder = placeholder[0].toUpperCase()
    + placeholder.slice(1);

  input.parentElement.append(label);
});
