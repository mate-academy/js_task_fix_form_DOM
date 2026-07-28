'use strict';

function formatName(n) {
  return n
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const labelText = formatName(input.name);

  input.placeholder = labelText;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = labelText;

  input.parentElement.appendChild(label);
});
