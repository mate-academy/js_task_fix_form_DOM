'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const inputName = input.getAttribute('name');
  const placeholder = inputName.charAt(0).toUpperCase() + inputName.slice(1);
  const label = document.createElement('label');

  label.classList.add('field-label');
  label.setAttribute('for', input.id);
  label.textContent = inputName.toUpperCase();
  input.placeholder = placeholder.replace(/([a-z])([A-Z])/g, '$1 $2');

  input.parentNode.appendChild(label);
});
