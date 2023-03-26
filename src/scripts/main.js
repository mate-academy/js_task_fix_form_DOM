'use strict';

function convertCamelCase(string) {
  const words = string.replace(/[A-Z]/g, (match) =>
    ` ${match.toLowerCase()}`).trim().split(' ');
  const titleCase = words.map(word =>
    word.charAt(0).toUpperCase() + word.slice(1));

  return titleCase.join(' ');
}

const inputsEl = document.querySelectorAll('input');

inputsEl.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.parentNode.insertBefore(label, input);
  input.placeholder = convertCamelCase(input.name);
});
