'use strict';

const input = document.querySelectorAll('input');

for (const key of input) {
  const newLabel = document.createElement('label');

  newLabel.className = 'field-label';
  newLabel.htmlFor = key.id;
  newLabel.textContent = key.name;

  key.parentElement.append(newLabel);

  key.placeholder = key.name[0].toUpperCase() + key.name.slice(1);
}
