'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = input.name;

  input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);

  input.parentElement.insertBefore(label, input);
});
