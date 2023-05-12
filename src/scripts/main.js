'use strict';

// write code here

const inputs = [...document.querySelectorAll('input')];

for (const input of inputs) {
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  const formLabel = document.createElement('label');

  formLabel.innerText = input.name;
  formLabel.className = 'field-label';
  formLabel.htmlFor = input.id;

  input.parentElement.append(formLabel);
}
