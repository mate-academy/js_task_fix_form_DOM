'use strict';

// write code here
const inputList = [...document.querySelectorAll('input')];

for (const input of inputList) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = input.name.replace(/([A-Z])/g, ' $1');
  label.htmlFor = input.id;
  input.before(label);

  input.placeholder = input.name[0].toUpperCase()
  + input.name.slice(1).replace(/([A-Z])/g, ' $1').toLowerCase();
}
