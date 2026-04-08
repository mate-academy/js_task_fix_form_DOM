'use strict';

// write code here
document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');

  inputs.forEach((input, index) => {
  const label = document.createElement('label');
  label.classList.add('field-label');

  if (!input.id) {
    input.id = `input-${index}`;
  }

  label.setAttribute('for', input.id);

  const name = input.name || `field-${index}`;
  label.textContent = capitalize(name);
  input.placeholder = capitalize(name);

  input.parentElement.insertBefore(label, input);
});

function capitalize(str) {
  if (typeof str !== 'string' || str.length === 0) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}
});
