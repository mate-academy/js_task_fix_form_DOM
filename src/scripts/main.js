'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const names = input.name;

  label.textContent = names.charAt(0).toUpperCase() + names.slice(1);

  input.placeholder = label.textContent;

  input.parentNode.insertBefore(label, input);
});
