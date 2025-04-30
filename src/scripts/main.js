'use strict';

const inputs = [...document.querySelectorAll('input')];



for (const input of inputs) {
  const label = document.createElement('label');
  
  if (input.hasAttribute('id')) {
    input.before(label);
    label.setAttribute('for', `${input.id}`);
    label.classList.add('field-label');
  }

  if (input.hasAttribute('name')) {
  label.textContent = input.name;
  input.setAttribute('placeholder', `${input.name.toUpperCase()}`);
}
}
