'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.textContent = input.name;
  label.classList.add('field-label');
  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);
  input.parentElement.insertBefore(label, input);
  label.htmlFor = input.id;
});
