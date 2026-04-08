'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input, i) => {
  if (!input.id) {
    input.id = `${input.name}-${i}`;
  }

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = capitalize(input.name);
  input.placeholder = capitalize(input.name);

  input.parentNode.appendChild(label);
});

function capitalize(s) {
  return s ? s[0].toUpperCase() + s.slice(1) : '';
}
