'use strict';

const inputsNodes = document.querySelectorAll('.field-text');

for (const input of inputsNodes) {
  const label = document.createElement('label');

  label.className = 'field-label';

  label.htmlFor = input.id;

  label.textContent = input.name.toUpperCase();

  const placeholder = input.name.toLowerCase();

  input.placeholder = placeholder[0].toUpperCase() + placeholder.slice(1);

  input.before(label);
}
