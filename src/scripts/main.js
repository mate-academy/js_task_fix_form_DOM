'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input, index) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', index);
  label.innerText = input.getAttribute('name');

  input.parentElement.appendChild(label);
  input.setAttribute('placeholder', input.getAttribute('name'));
});
// write code here
