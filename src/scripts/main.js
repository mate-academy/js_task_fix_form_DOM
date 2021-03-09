'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  label.textContent = input.name;

  const inputName = input.name;

  input.parentNode.append(label);

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputName);
  input.setAttribute('placeholder', inputName);
}
