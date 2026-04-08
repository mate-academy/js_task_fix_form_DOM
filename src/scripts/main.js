'use strict';

// write code here

const inputsArray = [...document.getElementsByTagName('input')];

for (const input of inputsArray) {
  const label = document.createElement('label');

  label.className = 'field-label';
  label.for = input.id;
  label.textContent = input.name;
  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  if (input.name.includes('Name')) {
    const index = input.placeholder.indexOf('Name');

    input.placeholder = input.placeholder.slice(0, index) + ' Name';
    label.textContent = input.placeholder;
  }

  input.parentNode.append(label);
}
