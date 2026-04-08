'use strict';

document.querySelectorAll('form .field').forEach((field) => {
  const input = field.querySelector('input');

  if (!input) {
    return;
  }

  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  input.setAttribute('placeholder', label.textContent);

  field.insertBefore(label, input);
});
