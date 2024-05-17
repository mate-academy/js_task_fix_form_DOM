'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name.toUpperCase();

  input.placeholder = label.textContent;
  input.parentNode.insertBefore(label, input);
});
