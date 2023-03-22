'use strict';

const inputs = document.querySelectorAll('form > div > input');

for (const input of inputs) {
  const label = document.createElement('label');
  const capitalized = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  label.textContent = input.name;

  input.setAttribute('placeholder', capitalized);

  input.parentElement.prepend(label);
}
