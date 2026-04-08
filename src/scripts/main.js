'use strict';

const allInputs = document.querySelectorAll('input');

function capitalizeWords(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

for (const input of allInputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = capitalizeWords(input.name);
  input.parentNode.appendChild(label);

  input.setAttribute('placeholder', capitalizeWords(input.name));
}
