'use strict';

const inputs = document.querySelectorAll('input');

for (const input of inputs) {
  const labelElement = document.createElement('label');

  input.before(labelElement);
  input.setAttribute('placeholder', `${input.name}`);
  input.setAttribute('autocapitalize', 'words');
  labelElement.classList.add('field-label');
  labelElement.setAttribute('for', `${input.id}`);
  labelElement.textContent = `${input.name}`;
}
