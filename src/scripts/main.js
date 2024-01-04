'use strict';

const inputElements = document.querySelectorAll('input');

for (const input of inputElements) {
  const label = document.createElement('label');
  label.classList = 'field-label';
  label.setAttribute('for', `${input.id}`);
  label.textContent = `${input.name}`;
  input.parentNode.append(label);

  input.setAttribute('placeholder', `${input.name.toUpperCase()}`);
};
