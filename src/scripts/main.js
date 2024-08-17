'use strict';

const forms = [...document.querySelectorAll('.field')];

forms.forEach((field) => {
  const label = document.createElement('label');
  const input = field.querySelector('input');

  label.setAttribute('for', input.id);
  label.textContent = normalizeInput(input.name);
  label.classList.add('field-label');
  input.placeholder = normalizeInput(input.name);
  field.insertBefore(label, input);
});

function normalizeInput(input) {
  let normalizePlaceholder =
    input[0].toUpperCase() + input.substring(1).toLowerCase();

  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      normalizePlaceholder =
        input[0].toUpperCase() +
        input.slice(1, i) +
        ' ' +
        input.slice(i).toLowerCase();
    }
  }

  return normalizePlaceholder;
}
