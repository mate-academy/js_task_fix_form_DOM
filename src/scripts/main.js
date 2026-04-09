'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.setAttribute(
    'placeholder',
    input.name.charAt(0).toUpperCase() + input.name.slice(1),
  );

  input.parentElement.insertBefore(label, input);
}
