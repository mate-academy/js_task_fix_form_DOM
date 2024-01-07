'use strict';

// write code here
const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;
  input.setAttribute('placeholder', input.name);

  // Adding the label to the parent container of the input
  const parentContainer = input.parentNode;

  parentContainer.appendChild(label);
});
