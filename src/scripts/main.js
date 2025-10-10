'use strict';

const inputCollection = document.querySelectorAll('form input');

for (const input of inputCollection) {
  const label = document.createElement('label');

  label.classList.add('field-label');

  if (!input.id) {
    input.id = input.name + Math.random().toString(36).slice(2, 11);
  }

  label.setAttribute('for', input.id);

  label.textContent = input.name.toUpperCase();
  input.parentElement.appendChild(label);

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
}
