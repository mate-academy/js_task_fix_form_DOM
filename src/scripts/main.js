'use strict';

// write code here
const inputsnodeist = document.querySelectorAll('.field-text');

const inputs = [...inputsnodeist];

for (let i = 0; i < inputs.length; i++) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.textContent = inputs[i].name;
  label.htmlFor = inputs[i].id;

  if (inputs[i].name === 'firstName') {
    inputs[i].placeholder = 'First Name';
    label.textContent = 'First Name';
  } else if (inputs[i].name === 'lastName') {
    inputs[i].placeholder = 'Last Name';
    label.textContent = 'First Name';
  } else {
    inputs[i].placeholder = inputs[i].name.toUpperCase();
  }

  inputs[i].parentElement.appendChild(label);
}
