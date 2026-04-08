'use strict';

const inputs = document.querySelectorAll('form input');

for (const input of inputs) {
  const elementLabel = document.createElement('label');

  elementLabel.className = 'field-label';
  elementLabel.htmlFor = input.id;
  elementLabel.textContent = input.name.toUpperCase();
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
  input.before(elementLabel);
}
