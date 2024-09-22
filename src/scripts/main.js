'use strict';

const allInputs = document.querySelectorAll('input');

allInputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);

  label.textContent = input.name.toUpperCase();

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.parentNode.insertBefore(label, input);
});
