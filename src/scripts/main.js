'use strict';

const input = [...document.querySelectorAll('input')];
let label;

for (let i = 0; input.length > i; i++) {
  label = input[i]
    .insertAdjacentElement('beforebegin', document.createElement('label'));
  label.className = 'field-label';
  label.htmlFor = input[i].id;
  label.innerText = (input[i].name).split('N').join(' N');

  input[i].placeholder = (input[i].name[0]).toUpperCase()
    + (input[i].name).split('N').join(' n').slice(1);
}
