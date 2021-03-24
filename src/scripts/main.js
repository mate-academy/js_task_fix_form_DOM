'use strict';

// write code here
const form = document.getElementsByClassName('field-text');
// const form2 = document.querySelectorAll('input');

// console.log(form);
// console.log(form2);

for (const input of form) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.htmlFor = input.id;

  const placeholder = input.name[0].toUpperCase()
  + input.name
    .slice(1)
    .replace(/([A-Z][a-z]+)/g, ' $1 ')
    .trim();

  input.placeholder = placeholder;
  label.innerText = placeholder;

  input.parentElement.append(label);
}
