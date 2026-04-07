'use strict';

// write code here
const fields = document.querySelectorAll('.field');

for (const field of fields) {
  const label = document.createElement('label');
  const input = field.querySelector('input');

  if (!input) {
    continue;
  }

  const inputId = input.getAttribute('id');
  let placeholder = input.getAttribute('name').toLowerCase();

  placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);

  if (placeholder === 'Firstname') {
    placeholder = 'First name';
  }

  if (placeholder === 'Lastname') {
    placeholder = 'Last name';
  }

  input.setAttribute('placeholder', placeholder);
  label.setAttribute('for', inputId);
  label.innerText = placeholder.toUpperCase();
  label.classList.add('field-label');
  field.prepend(label);
}
