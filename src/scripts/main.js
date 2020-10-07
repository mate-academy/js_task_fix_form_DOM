'use strict';

const fields = document.querySelectorAll('.field');

for (const field of fields) {
  const label = document.createElement('label');
  const input = field.querySelector('input');
  const inputName = toNormalCase(input.name);

  label.className = 'field-label';

  label.textContent = inputName;
  label.htmlFor = input.id;
  input.placeholder = inputName;

  field.append(label);
}

function toNormalCase(inputName) {
  const spacedInputName = inputName.replace(/([A-Z])/g, ' $1');

  return spacedInputName.split(' ').map(word => {
    return word[0].toUpperCase() + word.slice(1);
  }).join(' ');
}
