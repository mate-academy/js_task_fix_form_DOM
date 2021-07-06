'use strict';

const inputs = document.querySelectorAll('input');
const makeTitleCase = (string) => {
  const copitalizedString = string[0].toUpperCase() + string.slice(1);

  return copitalizedString
    .replace(/([A-Z]+)/g, ' $1')
    .replace(/([A-Z][a-z])/g, ' $1')
    .trim();
};

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentElement.prepend(label);
  input.placeholder = makeTitleCase(input.name);
});
