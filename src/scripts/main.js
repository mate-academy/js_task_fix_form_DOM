'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');
  const inputName = input.getAttribute('name');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = inputName.toUpperCase();

  input.placeholder = input.name[0].toUpperCase() + inputName.slice(1);

  input.parentElement.append(label);
}
