'use strict';

const inputs = document.querySelectorAll('input');

for (const item of inputs) {
  item.placeholder = item.name.toUpperCase();

  const inputLabel = document.createElement('label');

  inputLabel.for = item.id;
  inputLabel.textContent = item.name;
  inputLabel.className = 'field-label';
  item.before(inputLabel);
}
