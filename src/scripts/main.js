'use strict';

const inputs = document.querySelectorAll('input');
let count = 0;

function capitalize(str) {
  const a = str.toLowerCase();
  const result = a[0].toUpperCase() + a.slice(1);

  return result;
}

for (const input of inputs) {
  const label = document.createElement('label');

  label.setAttribute('for', input.getAttribute('id'));
  label.textContent = input.getAttribute('name');
  label.className = 'field-label';
  inputs[count].before(label);
  count++;
  input.setAttribute('placeholder', capitalize(input.getAttribute('name')));
}

const div = document.querySelector('.field-button');

