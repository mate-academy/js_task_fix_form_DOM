'use strict';

const input = document.querySelectorAll('input');
const inputArr = Array.from(input);

for (let i = 0; i < inputArr.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = inputArr[i].id;
  label.textContent = inputArr[i].name;
  input[i].before(label);
  input[i].placeholder = inputArr[i].name.toUpperCase();
}
