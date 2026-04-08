'use strict';

const inputs = document.querySelectorAll('input');

function splitCamelCase(names) {
  return names
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^[a-z]/, (char) => char.toUpperCase());
}

inputs.forEach((input) => {
  const label = document.createElement('label');
  const labelText = splitCamelCase(input.name);

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  label.textContent = labelText;

  input.placeholder = labelText;

  input.parentNode.insertBefore(label, input);
});
