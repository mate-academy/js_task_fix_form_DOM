'use strict';

function formatName(holderName = '') {
  const spaced = holderName.replace(/-+/g, ' ').trim();
  const lower = spaced.toLowerCase();

  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  if (!input.id) {
    input.id = input.name || `input-${Math.random().toString(36).slice(2)}`;
  }

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.htmlFor = input.id;

  const text = formatName(input.name);

  label.textContent = text;
  input.placeholder = text;

  input.parentElement.appendChild(label);
});
