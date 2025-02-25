'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.innerHTML = input.name.toUpperCase();
  label.setAttribute('for', input.id);
  input.parentNode.prepend(label);

  input.setAttribute('placeholder', input.name.toUpperCase());
}
