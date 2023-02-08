'use strict';

const inputs = document.querySelectorAll('.field-text');

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.getAttribute('name');

  input.before(label);

  const capName = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = capName;
}
