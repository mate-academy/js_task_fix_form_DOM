'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  if (input.hasAttribute('id')) {
    const label = document.createElement('label');

    input.before(label);
    label.setAttribute('for', `${input.id}`);
    label.classList.add('field-label');
    label.textContent = input.name;
  }

  if (input.hasAttribute('name')) {
    input.setAttribute('placeholder', `${input.name.toUpperCase()}`);
  }
}
