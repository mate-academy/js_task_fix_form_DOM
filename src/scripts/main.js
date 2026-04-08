'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');

  if (input.id) {
    label.setAttribute('for', input.id);
  }
  label.textContent = input.name.toUpperCase();
  input.before(label);

  if (input.name) {
    input.placeholder =
      input.name.charAt(0).toUpperCase() + input.name.slice(1);
  }
}
