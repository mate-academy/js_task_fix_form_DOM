'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.setAttribute('for', `${input.getAttribute('id')}`);
  label.setAttribute('class', `field-label`);
  label.innerHTML = `${input.getAttribute('name')}`;

  input.setAttribute(
    'placeholder',
    `${input.getAttribute('name')[0].toUpperCase() + input.getAttribute('name').slice(1)}`,
  );
  input.parentElement.prepend(label);
}
