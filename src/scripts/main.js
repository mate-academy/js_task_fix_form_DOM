/* eslint-disable no-console */
'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const label = document.createElement('label');
  const inputParent = input.closest('div');

  label.classList.add('field-label');
  label.for = input.id;
  label.textContent = input.name.toUpperCase();

  const inputPlaceholder =
    input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = inputPlaceholder;

  inputParent.append(label);
}
