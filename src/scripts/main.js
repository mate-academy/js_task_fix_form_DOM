'use strict';

const inputCollection = document.querySelectorAll('form input');

for (const input of inputCollection) {
  const inputName =
    input.name && input.name.trim() ? input.name.trim() : 'field';
  const label = document.createElement('label');

  label.classList.add('field-label');

  if (!input.id) {
    input.id = inputName + Math.random().toString(36).slice(2, 11);
  }

  label.setAttribute('for', input.id);

  label.textContent = inputName.toUpperCase();
  input.parentElement.appendChild(label);

  input.placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);
}
