'use strict';

const inputElemet = document.querySelectorAll('form input');

inputElemet.forEach((input) => {
  const label = document.createElement('label');

  label.setAttribute('for', input.id);

  label.classList.add('field-label');

  label.textContent = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.placeholder = input.name.charAt(0).toUpperCase() + input.name.slice(1);

  input.parentElement.appendChild(label);
});
