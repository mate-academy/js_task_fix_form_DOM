'use strict';

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

const fields = document.querySelectorAll('.field');

for (const field of fields) {
  const input = field.querySelector('input');
  const label = document.createElement('label');

  input.placeholder = capitalize(input.name);

  label.textContent = input.placeholder;
  label.htmlFor = input.id;
  label.classList.add('field-label');

  field.prepend(label);
}
