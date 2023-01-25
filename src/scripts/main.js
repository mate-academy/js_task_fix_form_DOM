'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.getAttribute('id'));

  label.textContent = input.getAttribute('name');

  input.setAttribute('placeholder',
    input.getAttribute('name')[0].toUpperCase()
    + input.getAttribute('name').slice(1));

  const parentOfInput = input.parentElement;

  parentOfInput.append(label);
}
