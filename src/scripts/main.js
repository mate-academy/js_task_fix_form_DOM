'use strict';

const allInputs = [...document.querySelectorAll('input')];

for (const input of allInputs) {
  const label = document.createElement('label');
  const placeholder = input.name[0].toUpperCase()
    + input.name.slice(1).replace(/([A-Z][a-z]+)/g, ' $1');

  label.className = 'field-label';
  label.htmlFor = `${input.id}`;
  label.textContent = `${input.name.replace(/([A-Z][a-z]+)/g, ' $1')}`;

  input.placeholder = `${placeholder}`;
  input.parentElement.append(label);
};
