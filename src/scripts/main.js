'use strict';

const inputsNodes = document.querySelectorAll('.field-text');

for (const input of inputsNodes) {
  const label = document.createElement('label');

  label.className = 'field-label';

  label.htmlFor = input.id;

  label.textContent = input.name;

  input.placeholder = input.name[0].toUpperCase()
    + input.name.slice(1).toLowerCase();

  input.before(label);
}
