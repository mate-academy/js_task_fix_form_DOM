'use strict';

const inputs = document.querySelectorAll('input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);

  const text = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  label.textContent = text;
  input.placeholder = text;

  input.parentElement.append(label);
});
