'use strict';

const inputs = document.querySelectorAll('.field');
const input = document.querySelectorAll('input');
const idArray = [];
const nameLabels = [];

for (const item of input) {
  idArray.push(item.id);
  nameLabels.push(`${item.name[0].toUpperCase()}${item.name.slice(1)}`);
};

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', idArray[i]);
  label.textContent = nameLabels[i];

  input[i].placeholder = nameLabels[i];
  inputs[i].append(label);
};
