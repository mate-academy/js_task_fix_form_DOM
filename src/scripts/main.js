'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('input');

  inputs.forEach((input) => {
    input.setAttribute('placeholder', capitalize(input.name));

    const label = createLabel(input);

    input.insertAdjacentElement('beforebegin', label);
  });
});

function capitalize(text) {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function createLabel(input) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  return label;
}
