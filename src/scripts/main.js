'use strict';

const inputElements = document.querySelectorAll('input');

for (const input of inputElements) {
  const label = document.createElement('label');

  label.classList = 'field-label';
  label.setAttribute('for', `${input.id}`);
  label.textContent = `${input.name}`;

  if (label.textContent.includes('Name')) {
    label.textContent = label.textContent.replace('Name', ' name');
  }
  input.parentNode.append(label);

  input.setAttribute('placeholder', `${input.name.toUpperCase()}`);

  if (input.placeholder.includes('NAME')) {
    input.placeholder = input.placeholder.replace('NAME', ' NAME');
  }
};
