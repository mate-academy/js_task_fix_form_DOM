'use strict';

const inputs = Array.from(document.querySelectorAll('input'));

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', [input.id]);
  label.textContent = input.name;
  input.parentNode.insertBefore(label, input);
  input.placeholder = capitalize(input.name);
});

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
