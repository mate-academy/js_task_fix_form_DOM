'use strict';

function getCapitalCase(string) {
  return string
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, char => {
      return char.toUpperCase();
    });
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name;

  label.setAttribute('for', input.getAttribute('id'));
  input.parentElement.append(label);

  input.placeholder = getCapitalCase(input.name);
});
