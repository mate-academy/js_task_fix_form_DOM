'use strict';

// write code here

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const attName = input.name;
  const label = document.createElement('label');

  label.htmlFor = input.id;
  label.textContent = attName;
  label.classList.add('field-label');

  input.parentElement.appendChild(label);

  input.placeholder = attName[0].toLocaleUpperCase() + attName.slice(1);
});
