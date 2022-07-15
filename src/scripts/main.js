'use strict';

const inputs = document.querySelectorAll('input');

for (const input of [...inputs]) {
  const newLabel = document.createElement('Label');

  newLabel.className = 'field-label';
  newLabel.htmlFor = input.id;
  newLabel.innerHTML = input.name;

  input.parentElement.append(newLabel);
  input.placeholder = input.name.toUpperCase();
};
