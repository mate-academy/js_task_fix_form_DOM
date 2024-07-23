'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.for = input.id;

  label.textContent = capitalize(input.name);

  input.placeholder = capitalize(input.name);

  input.parentNode.insertBefore(label, input);
});

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
