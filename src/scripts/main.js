'use strict';

const inputCollection = document.querySelectorAll('.field-text');

for (const input of inputCollection) {
  const label = document.createElement('label');

  label.classList.add('field-label');

  if (input.id) {
    label.setAttribute('for', input.id);
  }

  label.textContent = input.name.toUpperCase();
  input.before(label);

  input.placeholder = input.name.at(0).toUpperCase() + input.name.slice(1);
}
