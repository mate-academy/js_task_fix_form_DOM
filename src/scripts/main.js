'use strict';

const input = document.querySelectorAll('input');
const label = document.createElement('label');

for (let i = 0; i < input.length; i++) {
  label[i] = document.createElement('label');

  const firstLetter = input[i].name.slice(0, 1).toUpperCase();
  const wordWithoutFirstLetter = input[i].name.slice(1).split('t').join('t ');

  label[i].className = 'field-label';
  label[i].htmlFor = input[i].id;
  label[i].innerText = input[i].name.split('t').join('t ');
  input[i].placeholder = firstLetter + wordWithoutFirstLetter;

  input[i].insertAdjacentElement('beforebegin', label[i]);
}

// write code here
