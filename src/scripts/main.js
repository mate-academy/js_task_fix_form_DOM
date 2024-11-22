'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = capitalizeFirstLetter(input.name);

  input.setAttribute('placeholder', capitalizeFirstLetter(input.name));
  input.parentNode.insertBefore(label, input);
});

function capitalizeFirstLetter(str) {
  return str
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/^./, (string) => string.toUpperCase());
}
