'use strict';

const inputs = document.querySelectorAll('form input');

const inputsArray = [...inputs];

for (const input of inputsArray) {
  input.htmlFor = input.id;

  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name;

  input.before(label);
  input.placeholder = input.name;
};
