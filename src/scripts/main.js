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
  let normalizePlaceholder = input[0].toUpperCase();

  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i].toUpperCase()) {
      normalizePlaceholder += ` ${input[i].toLowerCase()}`;
    } else {
      normalizePlaceholder += input[i];
    }
  }

  return normalizePlaceholder;
}
