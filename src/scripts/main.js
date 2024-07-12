'use strict';

const inputs = [...document.querySelectorAll('input')];

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.innerText = input.name;

  input.parentNode.insertBefore(label, input);

  input.placeholder = input.name.toUpperCase();
});
