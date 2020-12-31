'use strict';

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  const labelForInput = document.createElement('label');

  labelForInput.className = 'field-label';
  labelForInput.htmlFor = input.id;
  labelForInput.textContent = input.name;

  input.placeholder = input.name;

  input.parentElement.append(labelForInput);
}
