'use strict';

function getPlaceholder(str) {
  const placeholder = str.split('');

  placeholder[0] = placeholder[0].toUpperCase();

  return placeholder.join('');
}

const fields = document.querySelectorAll('.field');

for (const field of fields) {
  const input = field.querySelector('input');
  const label = document.createElement('label');

  input.placeholder = getPlaceholder(input.name);

  label.textContent = input.placeholder;
  label.htmlFor = input.id;
  label.classList.add('field-label');

  field.prepend(label);
}
