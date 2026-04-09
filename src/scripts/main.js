'use strict';

// write code here
const inputList = document.querySelectorAll('input');

for (const input of inputList) {
  const label = document.createElement('label');
  const labelContent = [];

  for (const char of input.name.split('')) {
    if (char === char.toUpperCase()) {
      labelContent.push(` ${char}`);
    } else {
      labelContent.push(char);
    }
  }

  label.className = 'field-label';
  label.textContent = labelContent.join('');
  label.htmlFor = input.id;
  input.before(label);

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
}
