'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('form input');
  const counter = 0;

  for (const input of inputs) {
    const raw = (input.name || '').trim();
    const id =
      input.id ||
      (raw ? raw.replace(/\s+/g, '-').toLowerCase() : `input-${counter}`);

    input.id = id;

    if (document.querySelector(`label[for="${input.id}"]`)) {
      continue;
    }

    const label = document.createElement('label');

    label.classList.add('field-label');
    label.setAttribute('for', input.id);

    label.textContent = input.name;

    if (raw) {
      input.placeholder = raw.charAt(0).toUpperCase() + raw.slice(1);
    }

    input.parentElement.appendChild(label);
  }
});
