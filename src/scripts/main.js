'use strict';

const inputs = [...document.querySelectorAll('[name]')].slice(1);

for (const input of inputs) {
  const camelSplit = input.name
    .split(/(?=[A-Z])/).join(' ');
  const modifiedName = camelSplit.charAt(0).toUpperCase() + camelSplit.slice(1);

  input.placeholder = modifiedName;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = modifiedName;

  input.before(label);
}
