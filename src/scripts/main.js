'use strict';

const inputs = document.querySelectorAll('form input');

inputs.forEach((input) => {
  const label = document.createElement('label');

  label.classList.add('field-label');

  label.setAttribute('for', input.id);

  input.insertAdjacentElement('afterend', label);

  const placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.setAttribute('placeholder', placeholder);

  label.textContent = placeholder;

  input.parentElement.appendChild(label);
});
