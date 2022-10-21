'use strict';

const inputs = document.querySelectorAll('input');

[...inputs].map(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = formatInputName(input.name);

  return input.parentElement.append(label);
});

[...inputs].map(input => {
  return input.setAttribute('placeholder',
    formatInputName(input.name));
});

function formatInputName(inputName) {
  const result = inputName
    .split('')
    .map(char => (char === char.toUpperCase() ? ' ' + char : char))
    .join('');

  return result.replace(inputName[0], inputName[0].toUpperCase());
}
