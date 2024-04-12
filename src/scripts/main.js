'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);

  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  const placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', placeholder);

  label.classList.add('field-label');

  input.parentNode.appendChild(label);
});
