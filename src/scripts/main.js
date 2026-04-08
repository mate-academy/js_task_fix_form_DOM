'use strict';

const input = document.querySelectorAll('input');
const label = [];

console.log(input[0].id);
for (let i = 0; i < input.length; i++) {
  label.push(document.createElement('label'));
  input[i].before(label[i]);
  input[i].className = 'field-label';
  label[i].htmlFor = input[i].id
  label[i].textContent = input[i].name.slice(0,1).toUpperCase() + input[i].name.slice(1);
  input[i].placeholder = label[i].textContent
}
