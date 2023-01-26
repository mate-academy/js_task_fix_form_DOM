'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.className = 'field-label';

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  label.textContent = input.placeholder;

  input.parentElement.append(label);
}
