'use strict';

const inputs = [...document.querySelectorAll('form input')];

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
  input.before(label);

  input.placeholder =
    input.name[0].toUpperCase() + input.name.slice(1).toLowerCase();
}
