'use strict';

const allInputs = [...document.querySelectorAll('input')];

for (const input of allInputs) {
  const label = document.createElement('label');
  const placeholder = input.name.slice(0, 1).toUpperCase()
    + input.name.slice(1);

  label.className = 'field-label';
  label.htmlFor = `${input.id}`;
  label.textContent = `${input.name}`;

  input.placeholder = `${placeholder}`;
  input.parentElement.append(label);
};
