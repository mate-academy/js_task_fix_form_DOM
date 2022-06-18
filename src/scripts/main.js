'use strict';

// write code here

const inputs = [...document.querySelectorAll('input')];

inputs.forEach(input => {
  const label = document.createElement('label');

  label.className = ['field-label'];
  label.htmlFor = input.id;
  label.textContent = input.name.includes('Name')
    ? input.name.replace('Name', ' Name')
    : input.name;

  input.parentElement.append(label);

  input.placeholder = label.textContent[0].toLocaleUpperCase()
    + label.textContent.substring(1);
});
