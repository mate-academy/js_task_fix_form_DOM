'use strict';

const fields = document.getElementsByClassName('field');

for (const field of fields) {
  const label = document.createElement('label');

  const input = field.querySelector('input');

  label.textContent = input.getAttribute('name').toUpperCase();
  label.setAttribute('for', input.id);
  label.classList.add('field-label');

  input.setAttribute(
    'placeholder',
    `${input.getAttribute('name').slice(0, 1).toUpperCase()}${input.getAttribute('name').slice(1)}`,
  );

  field.insertBefore(label, input);
}
