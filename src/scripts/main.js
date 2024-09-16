'use strict';

const inputs = document.querySelectorAll('input');
const textFormat = (value) => {
  return value[0].toUpperCase() + value.slice(1).split('N').join(' N');
};

for (const input of inputs) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.placeholder = textFormat(input.name);

  label.append('field');
}
