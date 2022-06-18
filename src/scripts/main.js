'use strict';

// write code here

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = ['field-label'];
  label.htmlFor = input.id;
  label.textContent = input.name;

  input.parentElement.append(label);

  if (input.name.includes('Name')) {
    input.name = input.name.replace('Name', ' Name');
  }
  input.placeholder = input.name[0].toLocaleUpperCase()
    + input.name.substring(1);
});
