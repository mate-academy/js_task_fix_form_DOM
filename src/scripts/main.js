'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.className = 'field-label';

  const inputName = input.name.split('N').join(' N');

  input.placeholder = inputName[0].toUpperCase() + inputName.slice(1);

  label.textContent = input.placeholder;

  input.parentElement.append(label);
}
