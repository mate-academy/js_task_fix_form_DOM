'use strict';

const input = document.querySelectorAll('input');
const label = document.createElement('label');

for (let i = 0; i < input.length; i++) {
  label[i] = document.createElement('label');

  label[i].className = 'field-label';
  label[i].htmlFor = input[i].id;
  label[i].innerText = input[i].name;
  input[i].placeholder = input[i].name;

  input[i].insertAdjacentElement('beforebegin', label[i]);
}

// write code here
