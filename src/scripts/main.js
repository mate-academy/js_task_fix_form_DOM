'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input, index) => {
  if (!input.id) {
    input.id = `input-${index}`;
  }

  if (!input.parentElement.querySelector(`label[for="${input.id}"]`)) {
    const label = document.createElement('label');

    label.className = 'field-label';
    label.htmlFor = input.id;
    label.textContent = toLabelText(input.name);
    input.parentElement.appendChild(label);
  }
  input.placeholder = toLabelText(input.name);
});

function toLabelText(str) {
  const clean = str.replace(/([A-Z])/g, ' $1').toLowerCase();

  return clean.charAt(0).toUpperCase() + clean.slice(1);
}
