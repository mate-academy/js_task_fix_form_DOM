'use strict';

// write code here
const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');
  const placeholderText = input.name[0].toUpperCase() + input.name.slice(1);

  input.placeholder = `${placeholderText}`;
  label.textContent = `${input.name}`;
  label.classList.add('field-label');

  if (input.id) {
    label.setAttribute('for', `${input.id}`);
  }
  input.parentNode.insertBefore(label, input);
});
