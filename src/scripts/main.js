'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const label = document.createElement('label');

  input.parentElement.append(label);

  input.placeholder = input.name[0].toLocaleUpperCase()
    + input.name.slice(1);

  label.className = 'field-label';
  label.htmlFor = input.id;
  label.textContent = input.name;
}
