'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const label = document.createElement('label');

  const match = input.name.match(/([A-Z]?[^A-Z]*)/g);

  const inputName = `${match[0]} ${match[1]}`;

  label.textContent = inputName;

  input.parentNode.append(label);

  label.setAttribute('class', 'field-label');
  label.setAttribute('for', inputName);
  input.setAttribute('placeholder', inputName);
}
